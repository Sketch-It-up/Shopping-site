import React from 'react';
import './Product.css';

const Product = ({ id, title, description, price, img }) => {
  const imageUrl = img?.url || ''; // Handle case where img or img.url might be undefined
  return (
    <div className="">
      <div className="Product_main">
        <div className="card border-0 ">
          <div className="card_head">
            <img src={"http://localhost:1337/admin" + imageUrl} alt={title} className="img-fluid" />
          </div>
          <div className="card-body">
            <h4 className="Product_title">{title}</h4>
            <p className="Product_name">{description}</p>
            <div className="icons pb-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h4 className="Product_price">${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;