import React from "react";
import "./CatPage.css";
import { Link } from "react-router-dom";

const categories = [
  { title: "Dry food", img: "/images/royal canin food.jpg" },
  { title: "Wet food", img: "/images/ME-O chicken veg.jpg" },
  { title: "Treats", img: "/images/cattreat.png" },
  { title: "Pharmacy", img: "/images/catpharmacy.jpg" },
  { title: "Cat Litter", img: "/images/catlitter.jpg" },
  { title: "Prescription diet", img: "/images/priscriptioncat.jpg" },
  { title: "Wellness", img: "/images/catwellness.jpg" },
  { title: "Toys", img: "/images/cattoys.jpg" },
  { title: "Grooming", img: "/images/catgrooming.jpg" },
  { title: "Walk essential", img: "/images/catwalk.jpg" },
  { title: "Travel supplies", img: "/images/cat travel and supplies.jpg" },
  { title: "Bowls & feeders", img: "/images/catbowl.jpg" }
];

const CatPage = () => {
  return (
    <div className="cat-page">
      <header className="header">
        {/* <div className="logo">🐾 Pawsitive</div> */}
        {/* <Link to="/ContactForm" className="call-link">📞 Contact</Link> */}
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
