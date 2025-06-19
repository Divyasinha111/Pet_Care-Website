import React from 'react';
import './GroomingPage.css'; // Optional: add style if you want

const GroomingPage = () => {
  return (
    <div className="grooming-page">
      {/* Header Section */}
      <section className="grooming-header">
        <h1>Pet Grooming Services</h1>
        <p>Keep your furry friends clean, healthy, and happy with our professional grooming services!</p>
      </section>

      {/* Why Grooming is Important */}
      <section className="importance-section">
        <h2>Why Grooming is Important?</h2>
        <p>Regular grooming prevents health issues like infections, keeps your pet comfortable, and makes them look adorable!</p>
      </section>

      {/* Services Offered */}
      <section className="services-section">
        <h2>Our Pet Grooming Services</h2>
        <ul className="services-list">
          <li>🛁 Bathing and Drying</li>
          <li>✂️ Full-Body Haircuts</li>
          <li>🧼 Nail Trimming & Filing</li>
          <li>👂 Ear Cleaning</li>
          <li>🐾 Paw and Pad Care</li>
          <li>🦷 Teeth Brushing</li>
          <li>🦋 Flea & Tick Treatments</li>
        </ul>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <h2>Grooming Packages</h2>
        <div className="packages-grid">
          <div className="package-card">
            <h3>🐶 Puppy Fresh Start</h3>
            <p>Gentle bath, light trim, ear cleaning - perfect for first timers!</p>
          </div>
          <div className="package-card">
            <h3>🐕 Deluxe Groom</h3>
            <p>Full service: haircut, nail trim, teeth cleaning, paw massage.</p>
          </div>
          <div className="package-card">
            <h3>🐩 Spa & Shine</h3>
            <p>Luxury shampoo, de-shedding treatment, aromatherapy massage.</p>
          </div>
        </div>
      </section>

      {/* Grooming Tips */}
      <section className="tips-section">
        <h2>Pet Grooming Tips</h2>
        <ul>
          <li>Brush your pet’s coat 2–3 times a week to avoid matting.</li>
          <li>Clean ears regularly to prevent infections.</li>
          <li>Trim nails monthly to prevent overgrowth and pain.</li>
          <li>Use pet-specific shampoos for healthy fur and skin.</li>
        </ul>
      </section>

      {/* Book Now */}
      <section className="book-section">
        <button className="book-now-btn">Book Grooming Appointment</button>
      </section>
    </div>
  );
};

export default GroomingPage;
