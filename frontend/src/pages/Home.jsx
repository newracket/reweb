import Navbar from "../components/Navbar.jsx";
import java from "../assets/javalogo.svg";
import python from "../assets/pythonlogo.svg";
import cpp from "../assets/cpplogo.svg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-outer-container">
      <Navbar/>
      <div className="home-container">
        <div className="home-banner">
          <div className="banner-text">
            <h1>ReWeb</h1>
            <p>Say goodbye to messy code!</p>
          </div>
        </div>
      </div>
      <div className="upload-section">
        <button className="upload-button" role="button">
          Choose Files
        </button>
      </div>
      <div className="supported-languages">
        <h1>What languages do we support?</h1>
        <div className="logo-container">
          <img src={java} alt="Java Logo" className="java-logo"/>
          <img src={python} alt="Python Logo" className="python-logo"/>
          <div className="cpp-logo-box">
            <img src={cpp} alt="CPP Logo" className="cpp-logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;