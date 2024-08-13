import React from 'react';

export const CartPage = ({ cartItems, removeFromCart, proceedToCheckout }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: {total}</h3>
        <button onClick={proceedToCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
