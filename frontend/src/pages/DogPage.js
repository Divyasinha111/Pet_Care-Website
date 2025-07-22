// src/pages/DogPage.js
import React from 'react';
import './DogPage.css';

const products = {
  food: Array(5).fill({
    name: 'Dog Food',
    price: 450,
    image: '/images/dogfood.jpg',
  }),
  toys: Array(5).fill({
    name: 'Dog Toy',
    price: 299,
    image: '/images/dogtoy.jpg',
  }),
  medicine: Array(5).fill({
    name: 'Dog Medicine',
    price: 220,
    image: '/images/dogmed.jpg',
  }),
};

const DogPage = () => {
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  };

  const renderCards = (items) =>
    items.map((item, index) => (
      <div className="product-card" key={index}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>₹{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    ));

  return (
    <div className="dog-page">
      <div className="dog-hero"></div>

      <section className="section">
        <h2>Dog Food</h2>
        <div className="product-grid">{renderCards(products.food)}</div>
      </section>

      <section className="section">
        <h2>Dog Toys</h2>
        <div className="product-grid">{renderCards(products.toys)}</div>
      </section>

      <section className="section">
        <h2>Dog Medicine</h2>
        <div className="product-grid">{renderCards(products.medicine)}</div>
      </section>
    </div>
  );
};

export default DogPage;
