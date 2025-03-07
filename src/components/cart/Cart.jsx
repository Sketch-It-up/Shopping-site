// filepath: d:\College_VIT\09_sketchitup\Dental-Ecommerce\Doctor-portfolio\E-commerce2\FrontEnd\src\components\cart\Cart.jsx
import React from "react";
import { Context } from "../../utils/context";
import { useContext } from "react";
import "./cart.css";

const Cart = ({ toggleCart }) => {
  const { cartItems, setCartItems } = useContext(Context);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h5>Shopping Cart</h5>
          <button className="close-btn" onClick={toggleCart}>&times;</button>
        </div>
        <div className="cart-body">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <h6>{item.title}</h6>
                <p>${item.price}</p>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <img src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png" alt="Empty Cart" />
              <h6>Unfortunately, Your Cart is Empty</h6>
              <p>Please add something to your cart</p>
              <button className="continue-btn">Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;