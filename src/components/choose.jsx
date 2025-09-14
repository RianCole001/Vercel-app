import React from "react";
function Chooseus() {
  return (
  <section id="features" className="py-5 text-center">
  <div className="container">
    <h2 className="mb-4">Why Choose BlackBear?</h2>
    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">Reliability</h5>
            <p className="card-text">We are always available when you need us.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">Affordability</h5>
            <p className="card-text">We offer premium services at fair pricing.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">Secure</h5>
            <p className="card-text">Your data and privacy are our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )};
export default Chooseus;