import React from "react";
import bgImage from "./b2.jpeg"; 
import bulldozzers from "../assets/bulldozzers.jpeg"; 
import dark1 from "../assets/DARK1.jpeg";

function CompanyProfile() {
  return (
    <section
      className="relative py-20 px-6 md:px-20 bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${dark1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight"style={{ color: '#FFD700' }} >
          Company Profile
        </h2>

        {/* Divider underline */}
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

        {/* Content */}
        <p className="text-lg md:text-xl leading-relaxed mb-6"
        
        
        >
          Our company is headquartered in{" "}
          <span className="font-semibold text-yellow-400">
            Kerugoya Town, Kirinyaga County
          </span>
          , with strong interests and presence in all major towns across Kenya.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We adopt a{" "}
          <span className="font-semibold text-yellow-400">
            Total Construction Project Management
          </span>{" "}
          approach in all our operations, ensuring unmatched value additions
          that are consistently passed on to our clients.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          At the heart of our business are our{" "}
          <span className="font-semibold text-yellow-400">Clients</span> and{" "}
          <span className="font-semibold text-yellow-400">Staff</span>. They are
          our most important assets, and we deliberately put their interests
          above everything else.
        </p>
      </div>
    </section>
  );
}

export default CompanyProfile;
