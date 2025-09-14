import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";

import project1a from "../assets/project1a.jpeg";
import project1b from "../assets/project1b.jpeg";
import project2a from "../assets/project2a.jpeg";
import project2b from "../assets/project2b.jpeg";
import project3a from "../assets/project3a.jpeg";
import project3b from "../assets/project3b.jpeg";

function Projects() {
  const projectList = [
    {
      title: "Shopping Mall Development",
      description:
        "A state-of-the-art commercial hub featuring retail outlets, entertainment zones, and modern office spaces.",
      images: [project1a, project1b],
    },
    {
      title: "Residential Apartments",
      description:
        "Luxury apartments designed for comfort, sustainability, and modern living standards.",
      images: [project2a, project2b],
    },
    {
      title: "Highway & Civil Works",
      description:
        "Infrastructure projects including highways, bridges, and drainage systems — enhancing connectivity.",
      images: [project3a, project3b],
    },
  ];

  return (
    <div className="bg-dark text-light">
      {/* ✅ Hero Carousel */}
      <Carousel fade interval={4000} className="shadow-lg">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project1a}
            alt="First project"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Delivering Iconic Projects</h2>
            <p>From commercial landmarks to modern homes & infrastructure.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project2a}
            alt="Second project"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Shaping Skylines</h2>
            <p>Building dreams with integrity and innovation.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project3a}
            alt="Third project"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Engineering Excellence</h2>
            <p>Quality infrastructure for sustainable growth.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ✅ Projects Grid */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Our Featured Projects</h2>
        {projectList.map((project, index) => (
          <Row
            key={index}
            className="align-items-center mb-5 border-bottom pb-5"
          >
            <Col md={6} className="mb-3">
              <h3 className="fw-bold">{project.title}</h3>
              <p>{project.description}</p>
            </Col>
            <Col md={6}>
              <Row>
                {project.images.map((img, i) => (
                  <Col xs={6} key={i}>
                    <Card className="bg-dark border-0">
                      <Card.Img
                        variant="top"
                        src={img}
                        alt={project.title}
                        className="rounded shadow"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Projects;
