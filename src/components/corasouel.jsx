import { Carousel } from "react-bootstrap";

function CarouselSection({ slides }) {
  return (
    <Carousel  id="carouselSection" fade interval={2500} pause={false}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          {/* Background image */}
          <img
            className="d-block w-100"
            src={slide.image}
            alt={`slide-${index}`}
            style={{ objectFit: "cover", height: "80vh" }}
          />

          {/* Overlay text */}
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="fw-bold">{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSection;
