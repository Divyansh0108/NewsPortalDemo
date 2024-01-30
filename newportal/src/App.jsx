import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/components/Nav";
import NewsCarousel from "./assets/components/NewsCarousel";
import "./assets/css/carousel.css";
import UserCard from "./assets/components/UserCards";
import "./assets/css/userCards.css";
import "./assets/css/nav.css";
import HomePagination from "./assets/components/Pagination";
import "./assets/css/homePagination.css";
import Footer from "./assets/components/Footer";
import "./assets/css/App.css";
import "./assets/css/footer.css";

function App() {
  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>

      <div className="section-container">
        <div className="news-carousel">
          <NewsCarousel />

          <div className="userCardsContainer">
            <UserCard />
          </div>
        </div>

        <div className="home-pagination-container">
          <HomePagination />
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
