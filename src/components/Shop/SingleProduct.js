import React from 'react';

export const SingleProduct = ({ product }) => {
  return (
    <div className="single-product-container">
      <div className="product-images">{/* Implement image gallery here */}</div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
        {/* Add additional details such as reviews */}
      </div>
    </div>
  );
};
