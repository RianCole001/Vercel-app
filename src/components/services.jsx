// sections/ServicesSection.js
import React from "react";
import ServiceCard from "./servicecard";

const ServicesSection = () => {
  const services = [
    {
      icon: "bi-building",
      title: "Commercial Construction",
      description:
        "We deliver state-of-the-art commercial spaces including offices, retail centers,shopping malls, markets ,petro station  and industrial buildings."
    },
    {
      icon: "bi-house-door",
      title: "Residential Construction",
      description:
        "From modern apartments to luxury homes, we build comfortable and sustainable living spaces."
    },
    {
      icon: "bi-truck-front",
      title: "Civil Works",
      description:
        "Strong and durable infrastructure projects including roads, bridges,dams ,fences,irrigation, canals, weirs and highways.Durablle and stable."
    },
    {
      icon: "bi-tools",
      title: "Leasing and Equipment Rental",
      description:
        "Equipments Leasing not limited to  slike Grader, Tippers, Trucks, Excavators, loaders, concrete mixtures and compressors."
    }
  ];

  return (
    <section id="services" className="py-5 bg-dark text-light">
      <div className="container">
      <h2 
  className="fw-bold text-center mb-5" 
  style={{ color: "yellow" }}
>
  What we do
</h2>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
