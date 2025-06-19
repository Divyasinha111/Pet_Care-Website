import React from 'react';
import { Link } from 'react-router-dom'; // <- Import Link
import './ServicesSection.css';

const services = [
  {
    title: 'Cat',
    image: '/images/cat1.jpg',
    link: '/cat',
  },
  {
    title: 'Hamster',
    image: '/images/hamster.jpg',
    link: '/hamster',
  },
  {
    title: 'Fish',
    image: '/images/fish1.jpg',
    link: '/fish',
  },
  {
    title: 'Dog',
    image: '/images/dog1.jpg',
    link: '/dog',
  },
  {
    title: 'Bird',
    image: '/images/bird2.jpg',
    link: '/bird',
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <h2 className="services-title">Top Categories</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
