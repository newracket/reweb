import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="homeLink" onClick={() => navigate("/")}>
        <img src="./reweb.svg" alt="ReWeb Logo" className="logo" />
        <h1 className="title">ReWeb</h1>
      </div>

      <div className="navLinks">
        <div className="navLink" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="navLink" onClick={() => navigate("/about")}>
          About
        </div>
      </div>
    </nav>
  );
}

export default Navbar;