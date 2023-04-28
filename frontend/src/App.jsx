import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Changes from "./pages/Changes.jsx";

function App() {
  // Add router here
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changes" element={<Changes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
