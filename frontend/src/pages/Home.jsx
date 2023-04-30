import Navbar from "../components/Navbar.jsx";
import java from "../assets/javalogo.svg";
import python from "../assets/pythonlogo.svg";
import cpp from "../assets/cpplogo.svg";
import upload from "../assets/upload.svg";
import improve from "../assets/improve.svg";
import easy from "../assets/easy.svg";
import "../styles/home.css";
import { useRef, useState } from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Home() {
  const fileUpload = useRef(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();

  function handleFileUpload() {
    const file = fileUpload.current.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async () => {
      const oldCode = reader.result;
      setShowSpinner(true);
      const response = await makeAPIRequest(oldCode);
      // const newCode = atob(response.newCode);
      const newCode = response.newCode;
      setShowSpinner(false);

      navigate("/changes", { state: { oldCode, newCode } });
    };
  }

  async function makeAPIRequest(code) {
    const base64 = btoa(code);

    const URL = "http://localhost:5000/improve";
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      message: base64,
      bugs: true,
      comments: true,
      improve: true,
    };

    return await mockRequest({
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    // const response = await fetch(URL, {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify(body),
    // });
    //
    // return await response.json();
  }

  async function mockRequest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          newCode: `const a = 10\nconst boo = 10\n\nif(a === 10) {\n\tconsole.log('bar')\n}`,
        });
      }, 3000);
    });
  }

  return (
    <div className="home-outer-container">
      <Navbar />
      <div className="home-container">
        <div className="home-banner">
          <div className="banner-text">
            <h1 className="home-title">ReWeb</h1>
            <p>Improve your code online & free!</p>
          </div>
        </div>
      </div>
      <div className="upload-section">
        <button
          className="upload-button"
          role="button"
          onClick={() => fileUpload.current.click()}
        >
          Choose File{" "}
          {showSpinner ? (
            <Spin
              id="spinningIcon"
              indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />}
            />
          ) : (
            ""
          )}
        </button>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          ref={fileUpload}
          onChange={handleFileUpload}
        />
      </div>
      <div className="columns-container">
        <div className="info-column">
          <h1>How to use ReWeb</h1>
          <div className="instructions-container">
            <div className="upload-box">
              <img src={upload} alt="Upload Logo" id="upload-logo" />
              <h2>Upload your file using the Choose File Button</h2>
            </div>
            <div className="improve-box">
              <img src={improve} alt="Improve Logo" id="improve-logo" />
              <h2>Improve your code</h2>
            </div>
            <div className="easy-box">
              <img src={easy} alt="Easy Logo" id="easy-logo" />
              <h2>It&lsquo;s that easy!</h2>
            </div>
          </div>
        </div>
        <div className="language-column">
          <h1>What languages do we support?</h1>
          <div className="logo-container">
            <img src={java} alt="Java Logo" id="java-logo" />
            <img src={python} alt="Python Logo" id="python-logo" />
            <div id="cpp-logo-box">
              <img src={cpp} alt="CPP Logo" id="cpp-logo" />
            </div>
            <p>And many more!</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>
          <p>Copyright © 2023 ReWeb</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;