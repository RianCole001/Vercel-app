import React from "react";
import { FaHandsHelping, FaLightbulb, FaStar, FaLeaf, FaUsers } from "react-icons/fa";
import "./CoreValues.css";
import bulldozerImg from "./bulldozzers.jpeg";


function CoreValues() {
  const values = [
    { title: "Integrity", desc: "We keep our promises and act honestly.", icon: <FaHandsHelping /> },
    { title: "Innovation", desc: "We embrace new ideas and technologies.", icon: <FaLightbulb /> },
    { title: "Excellence", desc: "We deliver high quality in everything we do.", icon: <FaStar /> },
    { title: "Sustainability", desc: "We build responsibly for the future.", icon: <FaLeaf /> },
    { title: "Teamwork", desc: "We believe together, we achieve more.", icon: <FaUsers /> },
  ];

  return (
    <section 
      className="core-values py-5 text-center"
      style={{
        backgroundImage: `url(${bulldozerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Dark overlay to improve readability */}
      <div className="overlay"></div>

      <div className="container position-relative">
        <h2 className="fw-bold mb-5 section-heading">Our Core Values</h2>
        <div className="row">
          {values.map((val, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="value-card p-4 shadow-lg rounded">
                <div className="icon-container">{val.icon}</div>
                <h4 className="mt-3">{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
