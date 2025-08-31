import { Link } from "react-router-dom";
import React from "react";  

function Footer({
  companyName,
  description,
  quickLinks = [],
  contactInfo = {},
  socialLinks = {},
  copyright,
}) {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">{companyName}</h5>
            <p className="small">{description}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-light text-decoration-none">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <ul className="list-unstyled small">
              {contactInfo.address && <li>📍 {contactInfo.address}</li>}
              {contactInfo.phone && <li>📞 {contactInfo.phone}</li>}
              {contactInfo.email && <li>📧 {contactInfo.email}</li>}
            </ul>

            {/* Social Links */}
            <div className="d-flex gap-3">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-light">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-light">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-light">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-light">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center pt-3 border-top border-secondary small">
          {copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
