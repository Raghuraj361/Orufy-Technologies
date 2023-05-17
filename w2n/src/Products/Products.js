import React from "react";
import "./Products.css";

function Products({ id, name, description, rating, price, image }) {
  return (
    <>
      <div className="product">
        <div className="product_image">
          <img src={image} alt="#" />
        </div>
        <div className="product_name">
          <span>{name} </span>
          <span className="description">{description}</span>
          <span>{rating}</span>
          <span> ${price}</span>
        </div>
      </div>
    </>
  );
}

export default Products;
