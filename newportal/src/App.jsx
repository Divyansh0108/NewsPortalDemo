import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/components/Nav";
import "./assets/css/nav.css";
import Footer from "./assets/components/Footer";
import "./assets/css/footer.css";
import Home from "./assets/Pages/Home";
function App() {
  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
