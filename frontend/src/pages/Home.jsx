import Navbar from "../components/Navbar.jsx";
import java from "../assets/javalogo.svg";
import python from "../assets/pythonlogo.svg";
import cpp from "../assets/cpplogo.svg";
import upload from "../assets/upload.svg";
import improve from "../assets/improve.svg";
import easy from "../assets/easy.svg";
import "../styles/home.css";
import {useRef} from "react";

function Home() {
  const fileUpload = useRef(null);

  return (
    <div className="home-outer-container">
      <Navbar/>
      <div className="home-container">
        <div className="home-banner">
          <div className="banner-text">
            <h1>ReWeb</h1>
            <p>Improve your code online & free!</p>
          </div>
        </div>
      </div>
      <div className="upload-section">
        <button className="upload-button" role="button" onClick={() => fileUpload.current.click()}>
          Choose File
        </button>
        <input type="file" id="fileUpload" style={{display: "none"}} ref={fileUpload} />
      </div>
      <div className = "columns-container">
        <div className="info-column">
          <h1>How to use ReWeb</h1>
          <div className = "instructions-container">
            <div className = "upload-box">
              <img src={upload} alt="Upload Logo" id = "upload-logo"/>
              <h2>
                Upload your file using the Choose File Button
              </h2>
            </div>
            <div className = "improve-box">
              <img src={improve} alt="Improve Logo" id = "improve-logo"/>
              <h2>
                Improve your code
              </h2>
            </div>
            <div className = "easy-box">
              <img src={easy} alt="Easy Logo" id = "easy-logo"/>
              <h2>
                It's that easy!
              </h2>
          </div>
        </div>
      </div>
        <div className="language-column">
          <h1>What languages do we support?</h1>
          <div className="logo-container">
            <img src={java} alt="Java Logo" id="java-logo"/>
            <img src={python} alt="Python Logo" id="python-logo"/>
            <div id="cpp-logo-box">
              <img src={cpp} alt="CPP Logo" id="cpp-logo"/>
            </div>
          </div>
        </div>
      </div>
      <div className = "footer">
      <footer>
        <p>
          Copyright © 2023 ReWeb
        </p>
      </footer>
      </div>
    </div>
  );
}

export default Home;