import React from "react";
import "./CatPage.css";
import { Link } from "react-router-dom";

const categories = [
  { title: "Dry food", img: "/images/royal canin food.jpg" },
  { title: "Wet food", img: "/images/ME-O chicken veg.jpg" },
  { title: "Treats", img: "/images/treats.png" },
  { title: "Pharmacy", img: "/images/catmed2.png" },
  { title: "Cat Litter", img: "/images/litter.png" },
  { title: "Prescription diet", img: "/images/prescription.png" },
  { title: "Wellness", img: "/images/wellness.png" },
  { title: "Toys", img: "/images/toys.png" },
  { title: "Grooming", img: "/images/grooming.png" },
  { title: "Walk essential", img: "/images/walk.png" },
  { title: "Travel supplies", img: "/images/travel.png" },
  { title: "Bowls & feeders", img: "/images/bowls.png" }
];

const CatPage = () => {
  return (
    <div className="cat-page">
      <header className="header">
        <div className="logo">🐾 Pawsitive</div>
        <Link to="/ContactForm" className="call-link">📞 Contact</Link>
      </header>
      <h2 className="section-title">Paw-pular categories</h2>
      <div className="grid">
        {categories.map((cat, index) => (
          <div className="card" key={index}>
            <img src={cat.img} alt={cat.title} />
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatPage;
