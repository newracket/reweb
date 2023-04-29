import { diffLines, formatLines } from "unidiff";
import { Diff, markEdits, parseDiff, tokenize } from "react-diff-view";
import { Button } from "antd";
import { DownloadOutlined, ReloadOutlined } from "@ant-design/icons";

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
          <h1 className="changes-title">Here are your improvements!</h1>

          <div className="changes-options">
            <h2 className="changes-options-title">Options:</h2>

            <table>
              <tr>
                <td>
                  <label htmlFor="fix-bugs">Fix Bugs</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="fix-bugs"
                    className="changes-checkbox"
                    onClick={(e) => e.preventDefault()}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="add-comments">Add Comments</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="add-comments"
                    className="changes-checkbox"
                    onClick={(e) => e.preventDefault()}
                    checked
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="improve-accessibility">
                    Improve Accessibility
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="improve-accessibility"
                    className="changes-checkbox"
                    onClick={(e) => e.preventDefault()}
                  />
                </td>
              </tr>
            </table>
          </div>

          <p className="changes-description">
            If you like your changes, click download to download the new code!
            <br />
            If not, click regenerate to get a new set of changes.
          </p>

          <div className="buttons-row">
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
              className="download-button"
              onClick={downloadNewCode}
            >
              Download
            </Button>

            <Button
              type="primary"
              shape="round"
              icon={<ReloadOutlined />}
              size="large"
              className="regenerate-button"
            >
              Regenerate
            </Button>
          </div>
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
