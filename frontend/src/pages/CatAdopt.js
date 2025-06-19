// src/components/CatAdopt.js

import React from 'react';
import './CatAdopt.css';

const CatAdopt = () => {
  return (
    <div className="catadopt-container">

      {/* Hero Section */}
      <section className="hero-section">
        <img src="/images/hero.jpg" alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Find Your Purrfect Friend 🐱</h1>
          <a href="#meet-cats" className="hero-button">Meet Our Cats</a>
        </div>
      </section>

      {/* Meet Our Cats Section */}
      <section className="meet-cats" id="meet-cats">
        <h2>🐾 Meet Our Cats</h2>
        <div className="cats-grid">
          <div className="cat-card">
            <img src="/images/cat1.jpg" alt="Mittens" />
            <h3>Mittens</h3>
            <p>Age: 2 years</p>
            <p>Health: Healthy</p>
            <button className="adopt-button">Adopt</button>
          </div>
          <div className="cat-card">
            <img src="/images/bird1.jpg" alt="Oliver" />
            <h3>Oliver</h3>
            <p>Age: 1.5 years</p>
            <p>Health: Vaccinated</p>
            <button className="adopt-button">Adopt</button>
          </div>
          <div className="cat-card">
            <img src="/images/dog1.jpg" alt="Luna" />
            <h3>Luna</h3>
            <p>Age: 3 years</p>
            <p>Health: Healthy</p>
            <button className="adopt-button">Adopt</button>
          </div>
          <div className="cat-card">
            <img src="/images/bird2.jpg" alt="Simba" />
            <h3>Simba</h3>
            <p>Age: 2.5 years</p>
            <p>Health: Special Care</p>
            <button className="adopt-button">Adopt</button>
          </div>
        </div>
      </section>

      {/* How Adoption Works Section */}
      <section className="how-adoption-works">
        <h2>🛡️ How Adoption Works</h2>
        <div className="steps">
          <div className="step">Step 1: Choose Your Cat</div>
          <div className="step">Step 2: Submit Application</div>
          <div className="step">Step 3: Welcome Home!</div>
        </div>
      </section>

      {/* Happy Stories Section */}
      <section className="happy-stories">
        <h2>❤️ Happy Stories</h2>
        <div className="stories-grid">
          <div className="story">
            <img src="/images/story1.jpg" alt="Happy Story 1" />
            <p>"Mittens found her forever home!"</p>
          </div>
          <div className="story">
            <img src="/images/story2.jpg" alt="Happy Story 2" />
            <p>"Oliver loves his new family!"</p>
          </div>
        </div>
      </section>

      {/* Ready to Adopt Section */}
      <section className="ready-adopt">
        <h2>🚀 Ready to Adopt?</h2>
        <a href="ContactPage" className="start-button">Start Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Follow us: 📱 💌 💍</p>
      </footer>
    </div>
  );
};

export default CatAdopt;
