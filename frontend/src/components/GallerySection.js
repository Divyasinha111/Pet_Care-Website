import React from 'react';
import './GallerySection.css';

function GallerySection() {
  const images = [
    'https://placekitten.com/300/200',
    'https://placedog.net/300/200?id=1',
    'https://placekitten.com/301/200',
    'https://placedog.net/301/200?id=2',
    'https://placekitten.com/302/200',
    'https://placedog.net/302/200?id=3',
  ];

  return (
    <section className="gallery">
      <h2>Adorable Moments</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`pet-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
