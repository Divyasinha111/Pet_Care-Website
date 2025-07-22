// src/pages/HorsePage.js
import React from 'react';
import './HorsePage.css';

const products = {
  food: [
    { name: 'Horse Food 1', price: 150, image: '/images/hamsterfood1.jpg' },
    { name: 'Horse Food 2', price: 150, image: '/images/hamsterfood2.jpg' },
    { name: 'Horse Food 3', price: 150, image: '/images/hamsterfood3.jpg' },
    { name: 'Horse Food 4', price: 150, image: '/images/hamster4.jpg' },
    { name: 'Horse Food 5', price: 150, image: '/images/hamsterfood5.jpg' },
  ],
  toys: [
    { name: 'Horse Toy 1', price: 110, image: '/images/hamstertoy1.jpg' },
    { name: 'Horse Toy 2', price: 110, image: '/images/hamstertoy2.jpg' },
    { name: 'Horse Toy 3', price: 110, image: '/images/hamstertoy3.jpg' },
    { name: 'Horse Toy 4', price: 110, image: '/images/hamstertoy4.jpg' },
    { name: 'Horse Toy 5', price: 110, image: '/images/hamstertoy5.jpg' },
  ],
  medicine: [
    { name: 'Horse Medicine 1', price: 200, image: '/images/hamstermed5.jpg' },
    { name: 'Horse Medicine 2', price: 200, image: '/images/hamstermed1.jpg' },
    { name: 'Horse Medicine 3', price: 200, image: '/images/hamstermed2.jpg' },
    { name: 'Horse Medicine 4', price: 200, image: '/images/hamstermed3.jpg' },
    { name: 'Horse Medicine 5', price: 200, image: '/images/hamstermed4.jpg' },
  ],
};

const HorsePage = () => {
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
    <div className="horse-page">
      <div className="horse-hero"></div>

      <section className="section">
        <h2>Horse Food</h2>
        <div className="product-grid">{renderCards(products.food)}</div>
      </section>

      <section className="section">
        <h2>Horse Toys</h2>
        <div className="product-grid">{renderCards(products.toys)}</div>
      </section>

      <section className="section">
        <h2>Horse Medicine</h2>
        <div className="product-grid">{renderCards(products.medicine)}</div>
      </section>
    </div>
  );
};

export default HorsePage;
