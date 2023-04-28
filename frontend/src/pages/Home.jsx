import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-outer-container">
      <Navbar />

      <div className="home-container">
        <Sidebar />

        <div className="code">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;