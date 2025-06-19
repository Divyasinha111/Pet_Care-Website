import React from 'react';
import './PetCareInfo.css';

const PetCareInfo = () => {
  return (
    <section className="pet-care">
      <div className="pet-care-heading">
        <h2>We can keep your pet happy, healthy and active</h2>
        <p>
          Our expert team ensures your pets receive the best care, keeping them cheerful and energetic every day.
        </p>
      </div>

      <div className="pet-care-cards">
        <div className="care-card">
          <img src="/images/grooming.jpg" alt="Grooming" />
          <h3>Pet Grooming</h3>
          <p>Get professional grooming for your pets with love and care.</p>
          <button>Learn More</button>
        </div>

        <div className="care-card">
          <img src="/images/health.jpg" alt="Health" />
          <h3>Health Checkups</h3>
          <p>Regular health checkups from certified pet doctors.</p>
          <button>Learn More</button>
        </div>

        <div className="care-card">
          <img src="/images/fitness.jpg" alt="Fitness" />
          <h3>Fitness Plans</h3>
          <p>Stay active! Customized exercise routines for your pets.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default PetCareInfo;
