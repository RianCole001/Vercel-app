import React from "react";
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
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
          style={{ color: "#FFD700" }}
        >
          Company Profile
        </h2>

        {/* Decorative underline */}
        <div className="w-28 h-1 bg-yellow-500 mx-auto mb-12 rounded-full"></div>

        {/* Content */}
        <div className="space-y-8 text-lg md:text-xl font-semibold leading-relaxed tracking-wide">
          <p>
            Our company is headquartered in{" "}
            <span className="font-bold text-yellow-400">
              Kerugoya Town, Kirinyaga County
            </span>
            , with strong interests and presence in all major towns across Kenya.
          </p>

          <p>
            We adopt a{" "}
            <span className="font-bold text-yellow-400">
              Total Construction Project Management
            </span>{" "}
            approach in all our operations, ensuring unmatched value additions
            consistently passed on to our clients.
          </p>

          <p>
            At the heart of our business are our{" "}
            <span className="font-bold text-yellow-400">Clients</span> and{" "}
            <span className="font-bold text-yellow-400">Staff</span>. They are
            our most important assets, and we deliberately put their interests
            above everything else.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyProfile;
