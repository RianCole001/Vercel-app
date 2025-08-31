// components/ServiceCard.js
import React from "react";
import styles from "./ServiceCard.module.css"; // optional if using scoped CSS

const Servicecard = ({ icon, title, description }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className={`card h-100 text-center bg-secondary text-light shadow-sm ${styles.card || ""}`}>
        <div className="card-body">
          {/* Render icon here */}
          <i className={`bi ${icon} display-4 mb-3`}></i>
          
          <h5 className="card-title fw-bold" style={{ color: "yellow" }}>{title}</h5>
          <p className="card-text"style={{ color: "white" }}  >{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
