import React from 'react';
import './CustomCareSection.css';

const cardData = [
  {
    title: 'Custom Food',
    desc: 'Tailored meals to keep your pet healthy.',
    img: '/images/customfood.jpg',
  },
  {
    title: 'Exercise',
    desc: 'Daily fitness activities for your pet.',
    img: '/images/toy.jpg',
  },
  {
    title: 'Spa',
    desc: 'Relaxing spa experiences for pets.',
    img: '/images/spa.jpg',
  },
  {
    title: 'Grooming',
    desc: 'Professional grooming services.',
    img: '/images/doggroming.jpg',
  },
  {
    title: 'Health Check',
    desc: 'Routine health checks by experts.',
    img: '/images/pethealth.jpg',
  },
  {
    title: 'Training',
    desc: 'Obedience and behavior training.',
    img: '/images/exercise.jpg',
  },
];

const CustomCareSection = () => {
  return (
    <section className="custom-care-section">
      <h2 className="section-title">Our Special Care</h2>
      <div className="card-container">
        {cardData.map((item, idx) => (
          <div className="care-card" key={idx}>
            <img src={item.img} alt={item.title} className="card-icon" />
            <div className="care-card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomCareSection;
