import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState, useEffect } from "react";

import CarouselSection from "./components/corasouel";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Chooseus from "./components/choose";
import ImpactSection from "./worldsection";
import ServicesSection from "./components/services";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/footer";
import Preloader from "./components/preloader"; // ✅ import preloader

// Assets
import heropic from "./assets/c1.png";
import road1 from "./assets/w.jpeg";
import road2 from "./assets/world.jpeg";
import commercialbuilding from "./assets/commercialbuilding1.jpeg";
import residentialbuilding from "./assets/residentialbuilding1.jpeg";
import industrialbuilding from "./assets/industrialbuilding.jpeg";
import institutionalbuilding from "./assets/institutionalbuilding1.jpeg";
import civilengineering from "./assets/civilengineering.jpeg";

// Pages
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/Notfound";
import TendersTable from "./pages/Tenders";
import Products from "./pages/products";
import Projects from "./pages/projects";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading API / assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏳ 2 seconds (tweak this to match your API readiness)

    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      image: commercialbuilding,
      title: "Commercial Buildings construction",
      description: "Innovative and functional spaces for businesses.",
    },
    {
      image: residentialbuilding,
      title: "Residential Buildings construction",
      description: "Modern homes built with comfort and style.",
    },
    {
      image: industrialbuilding,
      title: "Industrial Buildings construction",
      description: "Efficient structures for industries and warehouses.",
    },
    {
      image: institutionalbuilding,
      title: "Institutional Buildings construction ",
      description: "Schools, hospitals, and facilities built to last.",
    },
    {
      image: civilengineering,
      title: "Civil Engineering Projects",
      description: "Strong infrastructure shaping tomorrow’s world.",
    },
  ];

  if (loading) return <Preloader />; // ✅ Show spinner until ready

  return (
    <div className="container-fluid p-0">
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero
                headline="Building Dreams, Creating Landmarks"
                tagline="Trusted partner in modern construction and innovation"
                image={heropic}
              />
              <Chooseus />
              <ImpactSection
                backgroundImage={road1}
                headline="Let’s Build The World Together"
                subheadline="From foundations to skylines, BlackBear builds with precision, passion, and purpose."
                buttonText="Our Products"
                buttonLink="#carouselSection"
              />
              <CarouselSection slides={slides} />
              <ServicesSection />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Tenders" element={<TendersTable />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <WhatsAppButton />
      <Footer
        companyName="BlackBear Constructions Ltd"
        description="We are your trusted partner in modern construction, delivering excellence and innovation for every project."
        quickLinks={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
          { label: "Products", path: "/products" },
          { label: "Projects", path: "/projects" },
          { label: "Tenders", path: "/Tenders" },
        ]}
        contactInfo={{
          address: `Black Bear Projects (K) Ltd
Opposite Kerugoya Boys High School
P.O Box 1177-10300
Kerugoya, Kenya`,
          phone: "+254 0726 782 071",
          email: "info@blackbearprojects.co.ke",
        }}
        socialLinks={{
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
        }}
        copyright="© 2025 BlackBear Solutions. All rights reserved."
      />
    </div>
  );
}

export default App;
