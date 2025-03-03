// import RelatedProducts from "./RelatedProducts/RelatedProducts";
import img1 from "../../Assets/blue_headphones.png";

import { NavLink } from "react-router-dom";
import "./SingleProducts.css";

// import useFetch from "../../hooks/useFetch";
// import { NavLink, useParams } from "react-router-dom";
// import { useContext, useState } from "react";
// import { Context } from "../../utils/context";

const SingleProducts = () => {
    return (
        <div>
            <div className="container gx-0 py-4 single_Product_main">
                <div className="category-title">
                    {/* <NavLink to="/"><h2>Home</h2></NavLink> / <span className="px-2"></span> */}
                </div>
                <div className="row gx-0 py-2 align-items-center">
                    <div className="col-md-6">
                        <div className="single_Product1">
                            <img src={img1} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single_Product2">
                            <h2 className="single_Product-title"> Bluetooth HeadPhones</h2>
                            <h3 className="single_Product-price">$50</h3>
                            <p className="single_Product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci distinctio velit temporibus blanditiis obcaecati aperiam veniam, hic a dolore aspernatur voluptas, illum nemo. Repudiandae incidunt quam doloribus similique facere?</p>
                            <div className="carts-button">
                                {/* <h6 className="text-align-left my-4 py-3">Quantity:</h6> */}
                                <div className="quality-buttons my-4 py-3">
                                    <span className="single-span">-</span>
                                    <input className="remove-arrow" placeholder="1" type="number" min="1"/>  
                                    <span className="single-span">+</span>
                                </div>
                                <button className="btn3 py-3">
                                    <i className="fa-solid fa-cart-shopping pe-2 fs-5"></i>
                                    ADD TO CART
                                </button>
                                <hr />
                                <div className="single-category py-2">
                                    <span className="fw-bold fs-6">Category :</span>
                                    <span className="ps-1">jhxbas</span>
                                </div>
                                <span className="fw-bold fs-6">Brand</span>
                                <div className="single-social py-2">
                                    <span className="fw-bold fs-6">Share</span>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="https://www.twitter.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                                {/* **************** */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts;
