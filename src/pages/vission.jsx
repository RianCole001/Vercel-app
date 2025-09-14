import React from "react";
import { Eye, Target } from "lucide-react";

// ✅ Import local background
import VisionBg from "../assets/cc.webp";

export default function VisionMission() {
  return (
    <section
      className="py-5 text-light"
      style={{
        backgroundImage: `url(${VisionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
        fontFamily: "Poppins, Segoe UI, sans-serif",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Dark overlay for better readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: -1,
        }}
      ></div>

      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">Our Vision & Mission</h2>
          <p className="text-light fs-5">
            Driving innovation, reliability, and excellence in every project.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="row g-4">
          {/* Vision */}
          <div className="col-md-6">
            <div
              className="card shadow-lg h-100 border-0"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="card-body p-5 d-flex flex-column align-items-center text-center">
                <Eye className="text-info mb-3" size={56} />
                <h3 className="fw-bold text-white mb-3">Our Vision</h3>
                <p className="lead lh-lg text-light text-justify">
                  Our vision is to be the premier lean construction and
                  engineering project management organization, through continuous
                  process improvement and our commitment to improve people’s
                  quality of life by achieving extraordinary and value-added
                  results for our clients, building satisfying careers for our
                  staff, and earning a fair return on the value we deliver.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6">
            <div
              className="card shadow-lg h-100 border-0"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="card-body p-5 d-flex flex-column align-items-center text-center">
                <Target className="text-warning mb-3" size={56} />
                <h3 className="fw-bold text-white mb-3">Our Mission</h3>
                <p className="lead lh-lg text-light text-justify">
                  Our mission is to turn infrastructure ideas into creative
                  engineering solutions and reality through a tradition of
                  building trust, delivering exceptional client service, and
                  creating value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
