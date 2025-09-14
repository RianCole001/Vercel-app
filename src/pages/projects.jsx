import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import { CheckCircle } from "lucide-react";

// Images
import project1a from "../assets/streetlight.jpg";
import project1b from "../assets/res.jpg";
import project2a from "../assets/Road1.jpg";
import project2b from "../assets/residencypp.webp";
import project3a from "../assets/officespace.webp";
import project3b from "../assets/officeb.webp";
import bb from "../assets/bulldozzers.jpeg";
import sh from "../assets/sh.jpeg";
import blackbear from "../assets/blackbear.jpg";

function Projects() {
  const projectList = [
    {
      title: "Road Lighting & Commercial Hub",
      description:
        "Light grading of Kiawaruguru-Kamuiru access roads in Kirinyaga county.",
      images: [project1a, sh],
    },
    {
      title: "Residential Apartments",
      description:
        "Construction of director’s residence, Kerugoya – a 6-bedroom house with carports, servant quarters, borehole, landscaping & fencing.",
      images: [project1b, project2b],
    },
    {
      title: "Institutional Buildings",
      description:
        "Construction of Black Bear Projects (K) Ltd office block & yard with septic system, vehicle yard, fencing & gate.",
      images: [blackbear, bb],
    },
  ];

  const otherProjects = [
    "Top sub grading, bridge back filling for Mr. Mbogori.",
    "Shoulder light grading and carriageway for Mukinduri-Kianjege-Kiaga.",
    "Shoulder light grading and carriageway for Njegas-Baricho Road.",
    "Creating Dykes at Mwea. 8. Plot back filling for Mr. Maruti..",
    
  ];

  return (
    <div className="bg-dark text-light">
      {/* ✅ Hero Carousel */}
      <Carousel fade interval={4000} className="shadow-lg">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project2b}
            alt="First project"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold" style={{ color: "#FFD700" }}>
              Delivering Iconic Projects
            </h2>
            <p>From commercial landmarks to modern homes & infrastructure.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project3b}
            alt="Second project"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold" style={{ color: "#FFD700" }}>
              Shaping Skylines
            </h2>
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
            <h2 className="fw-bold" style={{ color: "#FFD700" }}>
              Engineering Excellence
            </h2>
            <p>Quality infrastructure for sustainable growth.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ✅ Featured Projects */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#FFD700" }}>
          Our Featured Projects
        </h2>
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

      {/* ✅ Other Projects Section */}
      <Container className="py-5 border-top">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#FFD700" }}>
          Other Notable Projects
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <ul className="list-unstyled fs-5">
              {otherProjects.map((item, index) => (
                <li
                  key={index}
                  className="d-flex align-items-start mb-3 border-bottom pb-2"
                >
                  <CheckCircle
                    className="me-3 text-success"
                    size={22}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
