import React from "react";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItems = () => {
  const { cartItems, handleRemoveFromCart, handleCartQuantity } = useContext(Context);

  return (
    <div className="container">
      {cartItems.map((item) => {
        const imageUrl = item?.img?.url ? `http://localhost:1337${item.img.url}` : "";
        return (
          <div key={item.id} className="row gx-0">
            <div className="col-md-3">
              <img src={imageUrl} alt={item.title} className="img-fluid" />
            </div>
            <div className="col-8">
              <div className="cart-item">
                <h6>{item.title}</h6>
                <p>${item.price}</p>
                <div className="carts-button">
                  <div className="quality-buttons my-4 py-3">
                    <span className="single-span mx-1" onClick={() => handleCartQuantity(item, "dec")}>-</span>
                    <span className="single-span mx-1">{item.quantity}</span>
                    <span className="single-span mx-1" onClick={() => handleCartQuantity(item, "inc")}>+</span>
                  </div>
                </div>
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;