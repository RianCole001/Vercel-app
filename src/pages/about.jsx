import React from "react";
import { ReactTyped } from "react-typed"; // ✅ correct import
import styles from "./AboutHero.module.css";
import backgroundImage from "../assets/about.jpeg";
import CoreValues from "./corevalues";
import CompanyProfile from "./companyprofile"; 
import BusinessGoals from "./business";
import BusinessStrategy from "./businessstrategy";
import VisionMission from "./vission";
export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} text-white position-relative`}>
        <img src={backgroundImage} alt="About BlackBear" className={styles.bg} />
        <div className={styles.overlay} />

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
      <CompanyProfile />
      <VisionMission />
       <BusinessStrategy />
      <BusinessGoals />
    
    <CoreValues />

     
      <section className="container my-5">
       
      </section>
    </>
  );
}
