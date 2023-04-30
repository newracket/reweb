import Navbar from "../components/Navbar.jsx";
import "../styles/about.css";
import reactlogo from "../assets/reactlogo.svg";
import javascriptlogo from "../assets/javascriptlogo.svg";
import Footer from "../components/Footer.jsx";

function About() {
  return (
    <div className="about-outer-container">
      <Navbar/>
      <div className="about-container">
        <div className="about-banner">
          <h1>ABOUT REWEB</h1>
        </div>
        <div className="about-us-box">
          <div className="reweb-logo-container">
            <img src="./reweb.svg" alt="ReWeb Logo" id="reweb-logo"/>
          </div>
          <div className="our-mission">
            <h1>Our Mission</h1>
            <p>
              At ReWeb, we believe there is a better way to experience
              programming. So, we created an innovative platform that aims to
              make programming easier, more efficient, and more fun for
              programmers of all levels of experience. We understand that coding
              can be a challenging task, especially for beginners, and we wanted
              to create a tool that can help them learn and grow.
            </p>
          </div>

          <div className="how-we-made-this">
            <h1>How did we do it?</h1>
            <p>
              To create ReWeb, we used a combination of Flask and React to build
              a web application that is both user-friendly and efficient. Flask
              is a lightweight web framework that allowed us to quickly develop
              an API for our project. Meanwhile, React is a popular front-end
              library that enabled us to create a responsive and interactive
              user interface. In addition to Flask and React, we integrated an
              OpenAI model to provide accurate and helpful feedback to
              programmers, helping them to learn and improve their coding
              skills. Whether you&lsquo;re a seasoned developer or just starting
              out, ReWeb has something to offer.
            </p>
          </div>
          <div className="logos">
            <img src={reactlogo} alt="React Logo" id="react-logo"/>
            <img
              src={javascriptlogo}
              alt="JavaScript Logo"
              id="javascript-logo"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;