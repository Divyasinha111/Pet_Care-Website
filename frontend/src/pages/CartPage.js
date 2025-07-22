
import React, { useState, useEffect } from 'react';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';


const initialCart = [
  { id: 1, name: 'Bird Food', price: 120, quantity: 1, image: '/images/birdfood.jpg' },
  { id: 2, name: 'Bird Toy', price: 90, quantity: 2, image: '/images/toy.jpg' },

];

const CartPage = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    try {
      const parsed = stored ? JSON.parse(stored) : initialCart;
      return parsed.map(item => ({
        ...item,
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 1,
      }));
    } catch {
      // Fallback to initialCart if parsing fails or stored data is corrupt
      return initialCart;
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = id => {
    // This logic is perfectly fine for removing a single item by its unique ID.
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return sum + price * quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty">
        <h2>Your cart is empty 🛒</h2>
        <button onClick={() => navigate('/HomePage')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => {
          const price = Number(item.price) || 0;
          const quantity = Number(item.quantity) || 1;
          const subtotal = price * quantity;

          return (
          
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="details">
                <h3>{item.name}</h3>
                <p>₹{subtotal}</p>
                <div className="controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button className="remove" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="summary">
        <h3>Total: ₹{total}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;