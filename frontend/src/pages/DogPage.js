import React from 'react';
import './DogPage.css';

const DogPage = () => {
  return (
    <div className="dog-page">
      <div className="dog-hero"></div>

      <section className="section">
        <h2>Dog Food</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/dogfood.jpg" alt="Dog Food" />
            <p>₹450</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Dog Toys</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/dogtoy.jpg" alt="Dog Toy" />
            <p>₹299</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Dog Medicine</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/dogmed.jpg" alt="Dog Medicine" />
            <p>₹220</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DogPage;
