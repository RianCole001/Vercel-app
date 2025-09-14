import React from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white">Our Vision & Mission</h2>
          <p className="text-secondary fs-5">
            Driving innovation, reliability, and excellence in every project.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="row g-4">
          {/* Vision */}
          <div className="col-md-6">
            <div className="card bg-secondary bg-opacity-10 text-light shadow-lg h-100 border-0">
              <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                <Eye className="text-info mb-3" size={48} />
                <h3 className="fw-bold text-white">Our Vision</h3>
                <p className="mt-3 fs-5 text-light">
                  Our vision is be the premier lean construction and engineering project management organization, through continuous process improvement and our commitment to improve people’s quality of life by achieving extraordinary and value added results for our clients, building satisfying careers for our staff and earning a fair return on the value we deliver)
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6">
            <div className="card bg-secondary bg-opacity-10 text-light shadow-lg h-100 border-0">
              <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                <Target className="text-warning mb-3" size={48} />
                <h3 className="fw-bold text-white">Our Mission</h3>
                <p className="mt-3 fs-5 text-light">
                  Our mission is to turn infrastructure ideas into creative engineering solutions and reality through a tradition of building trust, delivering exceptional client service and creating value for all stakeholders..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
