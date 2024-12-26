import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>Rs.{product.price}</span>
        <br />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
