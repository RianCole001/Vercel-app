import React from "react";
import { ReactTyped } from "react-typed"; // ✅ correct import
import styles from "./AboutHero.module.css";
import backgroundImage from "../assets/about.jpeg";

// Sections
import CoreValues from "./corevalues";
import CompanyProfile from "./companyprofile";
import BusinessGoals from "./business";
import BusinessStrategy from "./businessstrategy";
import VisionMission from "./vission";

export default function About() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* Hero Section */}
      <section className={`${styles.hero} text-white position-relative`}>
        {/* Background image */}
        <img
          src={backgroundImage}
          alt="About BlackBear"
          className={styles.bg}
        />
        <div className={styles.overlay} />

        {/* Hero text */}
        <div className="container position-relative py-5 text-center">
          <h1 className="display-4 fw-bold mb-4">About BlackBear</h1>

          <h2 className="lead fs-2 fw-semibold text-white">
            <ReactTyped
              strings={[
                "Established in Kenya since 2012 🇰🇪",
                "A trusted limited liability company",
                "Inspired by the strength of the Black Bear 🐻",
                "Delivering excellence in construction & projects 🏗️",
                "Built on reliability, vision, and value 🌍",
              ]}
              typeSpeed={90}
              backSpeed={40}
              backDelay={3000}
              loop
            />
          </h2>
        </div>
      </section>

      {/* Body sections */}
      <CompanyProfile />
      <VisionMission />
      <BusinessStrategy />
      <BusinessGoals />
      <CoreValues />

      {/* Spacer section if you want extra space */}
      <section className="container my-5"></section>
    </div>
  );
}
