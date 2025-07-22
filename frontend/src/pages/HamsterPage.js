// src/pages/HamsterPage.js
import React from 'react';
import './HamsterPage.css';

const products = {
  food: [
    { id: 1, name: 'Hamster Food 1', price: 150, image: '/images/hamsterfood1.jpg' },
    { id: 2, name: 'Hamster Food 2', price: 150, image: '/images/hamsterfood2.jpg' },
    { id: 3, name: 'Hamster Food 3', price: 150, image: '/images/hamsterfood3.jpg' },
    { id: 4, name: 'Hamster Food 4', price: 150, image: '/images/hamster4.jpg' },
    { id: 5, name: 'Hamster Food 5', price: 150, image: '/images/hamsterfood5.jpg' },
  ],
  toys: [
    { id: 6, name: 'Hamster Toy 1', price: 110, image: '/images/hamstertoy1.jpg' },
    { id: 7, name: 'Hamster Toy 2', price: 110, image: '/images/hamstertoy2.jpg' },
    { id: 8, name: 'Hamster Toy 3', price: 110, image: '/images/hamstertoy3.jpg' },
    { id: 9, name: 'Hamster Toy 4', price: 110, image: '/images/hamstertoy4.jpg' },
    { id: 10, name: 'Hamster Toy 5', price: 110, image: '/images/hamstertoy5.jpg' },
  ],
  medicine: [
    { id: 11, name: 'Hamster Medicine 1', price: 200, image: '/images/hamstermed1.jpg' },
    { id: 12, name: 'Hamster Medicine 2', price: 200, image: '/images/hamstermed2.jpg' },
    { id: 13, name: 'Hamster Medicine 3', price: 200, image: '/images/hamstermed3.jpg' },
    { id: 14, name: 'Hamster Medicine 4', price: 200, image: '/images/hamstermed4.jpg' },
    { id: 15, name: 'Hamster Medicine 5', price: 200, image: '/images/hamstermed5.jpg' },
  ],
};

const HamsterPage = () => {
  const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${item.name} added to cart`);
  };

  const renderProductCards = (items) =>
    items.map((item) => (
      <div className="product-card" key={item.id}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>₹{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    ));

  return (
    <div className="hamster-page">
      <div className="hamster-hero"></div>

      <section className="section">
        <h2>Hamster Food</h2>
        <div className="product-grid">{renderProductCards(products.food)}</div>
      </section>

      <section className="section">
        <h2>Hamster Toys</h2>
        <div className="product-grid">{renderProductCards(products.toys)}</div>
      </section>

      <section className="section">
        <h2>Hamster Medicine</h2>
        <div className="product-grid">{renderProductCards(products.medicine)}</div>
      </section>
    </div>
  );
};

export default HamsterPage;
