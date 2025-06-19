import React, { useState, useEffect } from 'react';
import './main.css';

const images = [
  process.env.PUBLIC_URL + '/images/slide1.jpg',
  process.env.PUBLIC_URL + '/images/slide2.jpg',
  process.env.PUBLIC_URL + '/images/slide3.jpg',
  process.env.PUBLIC_URL + '/images/slide4.jpg',
  process.env.PUBLIC_URL + '/images/slide5.jpg',
];

const Main = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleGetStarted = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="main-container">
      <img src={images[current]} alt="Slide" className="main-image" />
      <div className="main-content">
        <h1>Welcome to Pawsitive</h1>
        <p>Helping paws find forever homes 🐾</p>
        <button className="main-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      <button className="arrow left" onClick={prevSlide}>&#8592;</button>
      <button className="arrow right" onClick={nextSlide}>&#8594;</button>
    </div>
  );
};

export default Main;
