import React from "react";
import "../cutomc.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    { icon: <FaPhoneAlt />, title: "Phone", value: "+254 726782071 " },
    { icon: <FaEnvelope />, title: "Email", value: "info@blackbear.co.ke" },
    { icon: <FaMapMarkerAlt />, title: "Address", value: " P.O Box 1177-10300Kerugoya " },
  ];

  return (
    <div className="container my-5 pt-5">
      <h1 className="text-center mb-4 fw-bold">Contact Us</h1>
      <p className="text-center text-muted">
        Have a project in mind? We'd love to hear from you!
      </p>

      {/* Contact Info Cards */}
      <div className="row text-center mb-5">
        {contactInfo.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="fs-2 text-dark mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h4 className="mb-3 fw-bold">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Type your message"></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.039421734408!2d37.28299219081927!3d-0.5097728794563918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182881cd3f3c49d1%3A0x349caebf201da05!2sKerugoya%20boys%20high%20school!5e0!3m2!1sen!2ske!4v1757087931981!5m2!1sen!2ske" 
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mt-5">
        <h5 className="fw-bold mb-3">Connect With Us</h5>
        <div className="d-flex justify-content-center gap-4 fs-3">
          <a href="https://facebook.com" className="text-dark"><FaFacebook /></a>
          <a href="https://twitter.com" className="text-dark"><FaTwitter /></a>
          <a href="https://linkedin.com" className="text-dark"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
