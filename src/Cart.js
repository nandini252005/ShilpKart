// src/Cart.js
import React, { useState } from 'react';
import './Cart.css'; // Import styles for the cart page

function Cart()  {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'MetalAura  ',
      price: 777,
      quantity: 1,
    },
    {
      id: 2,
      name: 'GlassGlimmer',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'CozyCraft',
      price: 888,
      quantity: 1,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Paper Bag</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>Price: {item.price}/-</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total Price: {getTotalPrice()}/-</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
