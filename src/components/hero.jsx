import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero({ headline, tagline, image }) {
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center text-center text-white vh-100 overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <Container className="position-relative z-1">
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="bg-dark bg-opacity-75 p-4 rounded shadow">
            {/* Headline */}
            <h1 className="display-4 fw-bold mb-3">{headline}</h1>

            {/* Tagline */}
            <p className="lead mb-4">{tagline}</p>

           
<Button
  as={Link}
  to="/about"
  variant="primary"
  size="lg"
  className="fw-semibold shadow"
>
  Black Bear Constructions
</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
