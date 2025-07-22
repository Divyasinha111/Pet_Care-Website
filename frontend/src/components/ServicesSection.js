import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const services = [
  {
    title: "Cat",
    image: "/images/cat1.jpg",
    link: "/cat",
  },
  {
    title: "Hamster",
    image: "/images/hamster.jpg",
    link: "/hamster",
  },
  {
    title: "Fish",
    image: "/images/fish1.jpg",
    link: "/fish",
  },
  {
    title: "Dog",
    image: "/images/dog1.jpg",
    link: "/dog",
  },
  {
    title: "Bird",
    image: "/images/bird2.jpg",
    link: "/bird",
  },
  {
    title: "Horse",
    image: "/images/horsemain.jpg",
    link: "/Horse", // Corrected link path
  },
  {
    title: "Rabbit",
    image: "/images/rabbitmain.jpg",
    link: "/rabbit", // Corrected link path
  },
  {
    title: "Reptile",
    image: "/images/reptilemain.jpg",
    link: "/reptile", // Corrected link path
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section-modern">
      <h2 className="services-section-title">Top Pet Categories</h2>
      <div className="services-section-grid">
        {services.map((service, index) => (
          <Link to={service.link} className="services-section-card" key={index}>
            <div className="services-section-img-wrap">
              <img
                src={service.image}
                alt={service.title}
                className="services-section-img"
              />
            </div>
            <h3 className="services-section-card-title">{service.title}</h3>
          </Link>
        ))}
      </div>
      <div className="services-section-cta-wrap">
        <Link to="/services" className="services-section-cta-btn">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
