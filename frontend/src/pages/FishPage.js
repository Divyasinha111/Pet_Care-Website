// src/pages/FishPage.js
import React from 'react';
import './FishPage.css';

const products = {
  food: [
    { id: 1, name: 'Fish Food', price: 80, image: '/images/fishfood.jpg' },
    { id: 2, name: 'Fish Food', price: 80, image: '/images/fishfood.jpg' },
    { id: 3, name: 'Fish Food', price: 80, image: '/images/fishfood.jpg' },
    { id: 4, name: 'Fish Food', price: 80, image: '/images/fishfood.jpg' },
    { id: 5, name: 'Fish Food', price: 80, image: '/images/fishfood.jpg' },
  ],
  toys: [
    { id: 6, name: 'Fish Toy', price: 50, image: '/images/fishtoy.jpg' },
    { id: 7, name: 'Fish Toy', price: 50, image: '/images/fishtoy.jpg' },
    { id: 8, name: 'Fish Toy', price: 50, image: '/images/fishtoy.jpg' },
    { id: 9, name: 'Fish Toy', price: 50, image: '/images/fishtoy.jpg' },
    { id: 10, name: 'Fish Toy', price: 50, image: '/images/fishtoy.jpg' },
  ],
  medicine: [
    { id: 11, name: 'Fish Medicine', price: 100, image: '/images/fishmed.jpg' },
    { id: 12, name: 'Fish Medicine', price: 100, image: '/images/fishmed.jpg' },
    { id: 13, name: 'Fish Medicine', price: 100, image: '/images/fishmed.jpg' },
    { id: 14, name: 'Fish Medicine', price: 100, image: '/images/fishmed.jpg' },
    { id: 15, name: 'Fish Medicine', price: 100, image: '/images/fishmed.jpg' },
  ],
};

const FishPage = () => {
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
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
    <div className="fish-page">
      <div className="fish-hero"></div>

      <section className="section">
        <h2>Fish Food</h2>
        <div className="product-grid">{renderProductCards(products.food)}</div>
      </section>

      <section className="section">
        <h2>Fish Toys</h2>
        <div className="product-grid">{renderProductCards(products.toys)}</div>
      </section>

      <section className="section">
        <h2>Fish Medicine</h2>
        <div className="product-grid">{renderProductCards(products.medicine)}</div>
      </section>
    </div>
  );
};

export default FishPage;
