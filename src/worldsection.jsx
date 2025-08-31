import React from "react";
import "./custom.css"; // your styles

const ImpactSection = ({ backgroundImage, headline, subheadline, buttonText, buttonLink }) => {
const sectionStyle = {
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage}) center/cover no-repeat`
  };

  return (
    <section className="impact-section text-center text-white d-flex align-items-center" style={sectionStyle}>
      <div className="container">
        <h2 className="display-4 fw-bold mb-3">{headline}</h2>
        <p className="lead mb-4">{subheadline}</p>
        {buttonText && (
          <a href={buttonLink} className="btn btn-warning btn-lg fw-bold">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default ImpactSection;
