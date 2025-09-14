import React from "react";
import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section
      className="py-20 px-6 md:px-20"
      style={{
        background: "linear-gradient(135deg, #0f172a, #09090aff)", // sleek dark gradient
        fontFamily: "Poppins, Segoe UI, sans-serif",
        color: "white",
      }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 " style={{ color: "#FFD700" }}
        >
          Our Vision & Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }} style={{ color: "#ff7b00ff" }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Driving innovation, reliability, and excellence in every project.
        </motion.p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition shadow-lg"
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <Eye size={64} className="text-cyan-400" />
            <h3 className="text-2xl font-bold" style={{ color: "#FFD700" }}   >Our Vision</h3> 
            <p className="text-gray-300 leading-relaxed">
              Our vision is to be the premier lean construction and engineering project management organization, through continuous process improvement and our commitment to improve people’s quality of life by achieving extraordinary and value-added results for our clients, building satisfying careers for our staff, and earning a fair return on the value we deliver.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition shadow-lg"
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <Target size={64} className="text-yellow-400" />
            <h3 className="text-2xl font-bold"  style={{ color: "#FFD700" }}  >Our Mission</h3> 
            <p className="text-gray-300 leading-relaxed">
              To transform infrastructure ideas into innovative engineering
              solutions through trust, exceptional service, and value creation
              for all stakeholders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
