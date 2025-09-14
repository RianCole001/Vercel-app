import React from "react";
import { Building2, Home, Route, Truck } from "lucide-react";

// Import local images
import commercialbuilding from "../assets/commercialbuilding1.jpeg";
import residentialbuilding from "../assets/residentialbuilding1.jpeg";
import civilengineering from "../assets/civilengineering.jpeg";
import industrialbuilding from "../assets/industrialbuilding.jpeg";
import bulldozzers from "../assets/bulldozzers.jpeg";

export default function Products() {
  const products = [
    {
      title: "Commercial Buildings",
      description:
        "We specialize in large-scale commercial projects such as shopping malls, office blocks, markets, and petrol stations — delivering modern designs with lasting value.",
      icon: <Building2 size={32} className="text-primary me-2" />,
      image: commercialbuilding,
    },
    {
      title: "Residential Buildings",
      description:
        "From elegant maisonnettes to modern apartments, condominiums, bungalows, and townhouses — we build homes that balance functionality, comfort, and aesthetics.",
      icon: <Home size={32} className="text-primary me-2" />,
      image: residentialbuilding,
    },
    {
      title: "Civil Works",
      description:
        "We provide civil engineering solutions for roads, bridges, canals, dams, irrigation, sewerage systems, and water supply — ensuring quality infrastructure that serves communities.",
      icon: <Route size={32} className="text-primary me-2" />,
      image: civilengineering,
    },
    {
      title: "Equipment Leasing",
      description:
        "We lease top-grade construction equipment such as graders, tippers, trucks, excavators, loaders, concrete mixers, and compressors for reliable performance on site.",
      icon: <Truck size={32} className="text-primary me-2" />,
      image: bulldozzers,
    },
  ];

  return (
    <div className="bg-dark text-light py-5 mt-5"> {/* 👈 Added mt-5 to push below navbar */}
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-light">
            Our Expertise & Services
          </h2>
          <p className="text-secondary fs-5">
            Delivering excellence in construction, engineering, and
            infrastructure development with integrity and innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow border-0">
                <div className="position-relative">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    {product.icon}
                    <h5 className="card-title mb-0">{product.title}</h5>
                  </div>
                  <p className="card-text text-muted flex-grow-1">
                    {product.description}
                  </p>
                  <a
                    href="/contact"
                    className="btn btn-primary mt-3 align-self-start"
                  >
                    Get a Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
