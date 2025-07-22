import React from 'react';
import './RabbitPage.css';

const products = {
  food: [
    { name: 'Rabbit Food 1', price: 150, image: '/images/hamsterfood1.jpg' },
    { name: 'Rabbit Food 2', price: 150, image: '/images/hamsterfood2.jpg' },
    { name: 'Rabbit Food 3', price: 150, image: '/images/hamsterfood3.jpg' },
    { name: 'Rabbit Food 4', price: 150, image: '/images/hamster4.jpg' },
    { name: 'Rabbit Food 5', price: 150, image: '/images/hamsterfood5.jpg' },
  ],
  toys: [
    { name: 'Rabbit Toy 1', price: 110, image: '/images/hamstertoy1.jpg' },
    { name: 'Rabbit Toy 2', price: 110, image: '/images/hamstertoy2.jpg' },
    { name: 'Rabbit Toy 3', price: 110, image: '/images/hamstertoy3.jpg' },
    { name: 'Rabbit Toy 4', price: 110, image: '/images/hamstertoy4.jpg' },
    { name: 'Rabbit Toy 5', price: 110, image: '/images/hamstertoy5.jpg' },
  ],
  medicine: [
    { name: 'Rabbit Medicine 1', price: 200, image: '/images/hamstermed.jpg' },
    { name: 'Rabbit Medicine 2', price: 200, image: '/images/hamstermed.jpg' },
    { name: 'Rabbit Medicine 3', price: 200, image: '/images/hamstermed.jpg' },
    { name: 'Rabbit Medicine 4', price: 200, image: '/images/hamstermed.jpg' },
    { name: 'Rabbit Medicine 5', price: 200, image: '/images/hamstermed.jpg' },
  ],
};

const RabbitPage = () => {
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
    <div className="rabbit-page">
      <div className="rabbit-hero"></div>

      <section className="section">
        <h2>Rabbit Food</h2>
        <div className="product-grid">{renderCards(products.food)}</div>
      </section>

      <section className="section">
        <h2>Rabbit Toys</h2>
        <div className="product-grid">{renderCards(products.toys)}</div>
      </section>

      <section className="section">
        <h2>Rabbit Medicine</h2>
        <div className="product-grid">{renderCards(products.medicine)}</div>
      </section>
    </div>
  );
};

export default RabbitPage;
