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
import { useMemo } from "react";
import Navbar from "../components/Navbar.jsx";

const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;
const codeLanguage = "js";

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
  const diffText = formatLines(diffLines(oldCode, newCode), { context: 3 });
  const [diff] = parseDiff(diffText, { nearbySequences: "zip" });
  const { hunks, type } = diff;
  const tokens = useMemo(() => customTokenize(hunks), [hunks]);

  function downloadNewCode() {
    const element = document.createElement("a");
    const file = new Blob([newCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `new.${codeLanguage}`;
    document.body.appendChild(element);
    element.click();
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
                  icon={<ReloadOutlined />}
                  size="large"
                  className="regenerate-button"
                >
                  Regenerate
                </Button>
              </td>
            </tr>
          </table>

          {/*<div className="download-row labelButtonRow">*/}
          {/*  <label>Happy with your changes? <SmileOutlined /> </label>*/}

          {/*  <Button*/}
          {/*    type="primary"*/}
          {/*    shape="round"*/}
          {/*    icon={<DownloadOutlined />}*/}
          {/*    size="large"*/}
          {/*    className="download-button"*/}
          {/*    onClick={downloadNewCode}*/}
          {/*  >*/}
          {/*    Download*/}
          {/*  </Button>*/}
          {/*</div>*/}

          {/*<div className="regenerate-row labelButtonRow">*/}
          {/*  <label>Want better improvements? <FrownOutlined /> </label>*/}

          {/*  <Button*/}
          {/*    type="primary"*/}
          {/*    shape="round"*/}
          {/*    icon={<ReloadOutlined />}*/}
          {/*    size="large"*/}
          {/*    className="regenerate-button"*/}
          {/*  >*/}
          {/*    Regenerate*/}
          {/*  </Button>*/}
          {/*</div>*/}
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
    </div>
  );
}

export default Changes;
