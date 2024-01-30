import Carousel from "react-bootstrap/Carousel";
import "../css/carousel.css";

function UncontrolledExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className="carousel-img-div">
          <Carousel.Caption>
            <h3>First news slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-div">
          <Carousel.Caption>
            <h3>Second news slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-div">
          <Carousel.Caption>
            <h3>Third news slide</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
