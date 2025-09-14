import React from "react";
import { Container } from "react-bootstrap";
import { FaHandshake, FaCity, FaUsers } from "react-icons/fa";

function BusinessStrategy() {
  const strategies = [
    {
      icon: <FaHandshake size={28} className="text-warning" />,
      title: "National Government",
      description:
        "Building sustainable partnerships with Kenya's national government to deliver impactful infrastructure projects.",
    },
    {
      icon: <FaCity size={28} className="text-warning" />,
      title: "County Governments",
      description:
        "Collaborating with county governments to meet local needs and improve community development.",
    },
    {
      icon: <FaUsers size={28} className="text-warning" />,
      title: "Local Communities",
      description:
        "Engaging with communities to create sustainable, honest, and inclusive construction solutions.",
    },
  ];

  return (
    <section className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-white">
          Business Strategy
        </h2>
        <div
          className="timeline position-relative mx-auto"
          style={{ maxWidth: "700px" }}
        >
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="timeline-item mb-5 d-flex align-items-start"
            >
              {/* Icon Circle */}
              <div
                className="timeline-icon d-flex justify-content-center align-items-center bg-secondary text-warning rounded-circle me-3 shadow"
                style={{ width: "60px", height: "60px", flexShrink: 0 }}
              >
                {strategy.icon}
              </div>
              {/* Text Content */}
              <div>
                <h5 className="fw-bold text-white">{strategy.title}</h5>
                <p className="mb-0 text-light">{strategy.description}</p>
              </div>
            </div>
          ))}
          {/* Vertical Line */}
          <div
            className="timeline-line position-absolute top-0 bottom-0 start-0"
            style={{
              left: "30px",
              width: "2px",
              backgroundColor: "rgba(255,255,255,0.2)", // subtle line
              marginLeft: "28px",
              zIndex: -1,
            }}
          ></div>
        </div>
      </Container>
    </section>
  );
}

export default BusinessStrategy;
