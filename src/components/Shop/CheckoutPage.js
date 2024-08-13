import React, { useState } from 'react';

export const CheckoutPage = ({ cartItems, submitOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // Add other fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitOrder(formData);
  };

  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {/* Add other input fields */}
        <button type="submit" className="submit-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};
