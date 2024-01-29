import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/components/Nav";
import NewsCarousel from "./assets/components/NewsCarousel";
import "./assets/css/carousel.css";
function App() {
  return (
    <>
      <NavBar />
      <div className="news-carousel">
        <NewsCarousel />
      </div>
    </>
  );
}

export default App;
