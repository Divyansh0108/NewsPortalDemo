import "../css/home.css";
import NewsCarousel from "../components/NewsCarousel";
import "../css/carousel.css";
import UserCard from "../components/UserCards";
import "../css/userCards.css";

const Home = () => {
  return (
    <>
      <div className="section-container">
        <div className="news-carousel">
          <NewsCarousel />

          <div className="userCardsContainer">
            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
