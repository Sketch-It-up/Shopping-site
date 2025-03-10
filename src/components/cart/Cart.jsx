import React from "react";
import { Context } from "../../utils/context";
import { useContext } from "react";
import "./cart.css";
import CartItems from "./CartItems/CartItems";

const Cart = ({ toggleCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h5>Shopping Cart</h5>
          <button className="close-btn" onClick={toggleCart}>&times;</button>
        </div>
        <div className="cart-body">
          {cartItems.length > 0 ? (
            <>
              <CartItems />
              <div className="cart-total">
                <h6>Total: ${cartSubTotal}</h6>
              </div>

              <button className="btn3 py-3" >
                  Checkout
                </button>
            </>
          ) : (
            <div className="empty-cart">
              <img src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png" alt="Empty Cart" />
              <h6>Unfortunately, Your Cart is Empty</h6>
              <p>Please add something to your cart</p>
              <button className="continue-btn" onClick={toggleCart}>Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;