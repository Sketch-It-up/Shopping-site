import React from "react";
import "./SingleProducts.css";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data, loading, error } = useFetch(`api/products?populate=*&filters[id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data?.data?.[0];
  const imageUrl = product?.img?.url ? `http://localhost:1337${product.img.url}` : "";

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div>
      <div className="container gx-0 py-4 single_Product_main">
        <div className="category-title">
          {/* <NavLink to="/"><h2>Home</h2></NavLink> / <span className="px-2"></span> */}
        </div>
        <div className="row gx-0 py-2 align-items-center">
          <div className="col-md-6">
            <div className="single_Product1">
              <img src={imageUrl} alt={product?.title} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_Product2">
              <h2 className="single_Product-title">{product?.title}</h2>
              <h3 className="single_Product-price">₹ {product?.price}</h3>
              <p className="single_Product-description">{product?.description}</p>
              <div className="carts-button">
                <div className="quality-buttons my-4 py-3">
                  <span className="single-span mx-1" onClick={decrement}>-</span>
                  <span className="single-span mx-1">{quantity}</span>
                  <span className="single-span mx-1" onClick={increment}>+</span>
                </div>

                <div className="checkout-buttons">
                  <button className="btn3 py-3" onClick={() => handleAddToCart(product, quantity)}>
                    <i className="fa-solid fa-cart-shopping pe-2 fs-5"></i>
                    ADD TO CART
                  </button>
                  <button className="button-buy btn2 py-3">
                    <i className="fa-solid fa-bag-shopping pe-2 fs-5"></i>
                    Buy Now
                  </button>
                </div>
                <hr />
                <div className="single-category py-2">
                  <span className="fw-bold fs-6">Category :</span>
                  <span className="ps-1">{product?.categories?.[0]?.title || "Category"}</span>
                </div>
                {/* <span className="fw-bold fs-6">Brand: {product?.brand}</span> */}
                <div className="single-social py-2">
                  <span className="fw-bold fs-6">Share</span>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                {/* **************** */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {product?.categories?.[0]?.id && product?.id && (
        <RelatedProducts categoryId={product.categories[0].id} productId={product.id} />
      )}
    </div>
  );
};

export default SingleProducts;