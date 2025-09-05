import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavCollapse}>
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          BlackBear
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={handleNavCollapse}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" onClick={handleNavCollapse}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Our Products" onClick={handleNavCollapse}>
                Our Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={handleNavCollapse}>
                Our Projects
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavCollapse}>
                Contact
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
