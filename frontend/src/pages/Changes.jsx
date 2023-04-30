import { diffLines, formatLines } from "unidiff";
import { Diff, markEdits, parseDiff, tokenize } from "react-diff-view";
import { Button } from "antd";
import {
  DownloadOutlined,
  FrownOutlined,
  ReloadOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import "react-diff-view/style/index.css";
import "../styles/changes.css";
import {useMemo, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {getImprovedCode} from "../../api.js";
import Footer from "../components/Footer.jsx";

let oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
console.log('placeholder')
`;
let newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;
let fileType = "py";

const customTokenize = (hunks) => {
  if (!hunks) {
    return undefined;
  }

  const options = {
    highlight: false,
    enhancers: [markEdits(hunks, { type: "block" })],
  };

  try {
    return tokenize(hunks, options);
  } catch (ex) {
    return undefined;
  }
};

function Changes() {
  const { state } = useLocation();
  if (state) {
    oldCode = state.oldCode;
    newCode = state.newCode;
    fileType = state.fileType;
  }

  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const diffText = formatLines(diffLines(oldCode, newCode), { context: 3 });
  const [diff] = parseDiff(diffText, { nearbySequences: "zip" });
  const { hunks, type } = diff;
  const tokens = useMemo(() => customTokenize(hunks), [hunks]);

  function downloadNewCode() {
    const element = document.createElement("a");
    const file = new Blob([newCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `new.${fileType}`;
    document.body.appendChild(element);
    element.click();
  }

  async function regenerateNewCode() {
      setShowSpinner(true);
      const newCode = await getImprovedCode(oldCode);
      setShowSpinner(false);

      navigate("/changes", { state: { oldCode, newCode, fileType } });
  }

  return (
    <div className="changes-outer-container">
      <Navbar />

      <div className="changes-container">
        <div className="changes-sidebar">
          <div className="changes-options">
            <h2 className="changes-options-title">
              Here are the changes we made:
            </h2>

            <ul className="changes-list">
              <li>Fixed bugs in your code</li>
              <li>Added comments to your code</li>
              <li>Improved accessibility for users of your code</li>
              <li>Improved variable and function names</li>
              <li>Properly formatted your code</li>
            </ul>
          </div>

          <table className="buttons-table">
            <tbody>
              <tr>
                <td>
                  <label className="happy-label">
                    Happy with your changes? <SmileOutlined />
                  </label>
                </td>
                <td>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<DownloadOutlined />}
                    size="large"
                    onClick={downloadNewCode}
                  >
                    Download
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="frown-label">
                    Want better improvements? <FrownOutlined />
                  </label>
                </td>
                <td>
                  <Button
                    type="primary"
                    shape="round"
                    icon={showSpinner ? <ReloadOutlined spin /> : <ReloadOutlined />}
                    size="large"
                    className="regenerate-button"
                    onClick={regenerateNewCode}
                  >
                    Regenerate
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="changes-main-content">
          <Diff
            viewType="split"
            diffType={type}
            hunks={hunks}
            tokens={tokens}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Changes;
