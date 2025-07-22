import React from 'react';
import './BirdPage.css';

const products = {
  food: [
    { name: 'Bird Food 1', price: 120, image: '/images/birdfood.jpg' },
    { name: 'Bird Food 2', price: 120, image: '/images/birdfood.jpg' },
    { name: 'Bird Food 3', price: 120, image: '/images/birdfood.jpg' },
    { name: 'Bird Food 4', price: 120, image: '/images/birdfood.jpg' },
    { name: 'Bird Food 5', price: 120, image: '/images/birdfood.jpg' },
  ],
  toys: [
    { name: 'Bird Toy 1', price: 90, image: '/images/toy.jpg' },
    { name: 'Bird Toy 2', price: 90, image: '/images/toy.jpg' },
    { name: 'Bird Toy 3', price: 90, image: '/images/toy.jpg' },
    { name: 'Bird Toy 4', price: 90, image: '/images/toy.jpg' },
    { name: 'Bird Toy 5', price: 90, image: '/images/toy.jpg' },
  ],
  medicine: [
    { name: 'Bird Medicine 1', price: 140, image: '/images/birdmed.jpg' },
    { name: 'Bird Medicine 2', price: 140, image: '/images/birdmed.jpg' },
    { name: 'Bird Medicine 3', price: 140, image: '/images/birdmed.jpg' },
    { name: 'Bird Medicine 4', price: 140, image: '/images/birdmed.jpg' },
    { name: 'Bird Medicine 5', price: 140, image: '/images/birdmed.jpg' },
  ],
};

const BirdPage = () => {
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
    <div className="bird-page">
      <div className="bird-hero"></div>

      <section className="section">
        <h2>Bird Food</h2>
        <div className="product-grid">{renderCards(products.food)}</div>
      </section>

      <section className="section">
        <h2>Bird Toys</h2>
        <div className="product-grid">{renderCards(products.toys)}</div>
      </section>

      <section className="section">
        <h2>Bird Medicine</h2>
        <div className="product-grid">{renderCards(products.medicine)}</div>
      </section>
    </div>
  );
};

export default BirdPage;
