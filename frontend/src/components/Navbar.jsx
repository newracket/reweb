import reweb from "../assets/reweb.svg";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="homeLink" onClick={() => navigate("/")}>
        <img src={reweb} alt="ReWeb Logo" className="logo" />
        <h1 className="title">ReWeb</h1>
      </div>
    </nav>
  );
}

export default Navbar;