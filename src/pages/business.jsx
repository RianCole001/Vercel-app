import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHardHat, FaLeaf } from "react-icons/fa";
import { TbCrane } from "react-icons/tb"; // from react-icons/tb

function BusinessGoals() {
  const goals = [
    {
      icon: <TbCrane size={50} className="text-warning mb-3" />,
      title: "Preeminent in Construction",
      description:
        "Strive to be Kenya’s top construction & project management company",
    },
    {
      icon: <FaLeaf size={50} className="text-warning mb-3" />,
      title: "Sustainability",
      description: "Integrating green & sustainable solutions",
    },
    {
      icon: <FaHardHat size={50} className="text-warning mb-3" />,
      title: "Employment Creation",
      description:
        "Empowering local communities with opportunities",
    },
  ];

  return (
    <section className="py-5 bg-dark text-light text-center">
      <Container>
        <h2 className="mb-5 fw-bold">Business Goals and Objectives</h2>
        <Row>
          {goals.map((goal, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="p-4 h-100 shadow rounded bg-dark border border-secondary">
                {goal.icon}
                <h5 className="fw-bold mt-2">{goal.title}</h5>
                <p className="mt-2">{goal.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BusinessGoals;
