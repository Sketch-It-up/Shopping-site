import React from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer"> 
            <div className="container gx-0">
                <div className="row gx-0">
                    <div className="col-md-4">
                        <div className="footer_col1">
                            <img src={logo} />
                            <div className="ft_icons pb-md-4">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <p>&copy; 2025 GurOm Dental. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_col2">
                            <h5 className="ft_h5">Get To Know Us</h5>
                            <ul>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/">Home</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/about">About</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_col2">
                        <h5 className="ft_h5">Get To Know Us</h5>
                            <ul>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/">Home</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/about">About</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink className="text-decoration-none" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer_col3">
                        <h5 className="ft_h5">Contact Us</h5>
                        <p className="py-2">
                            <i className="fa-solid fa-phone"></i>
                            +91 12345 67890
                        </p>
                        <p className="py-2">
                            <i className="fa-solid fa-envelope"></i>
                            info@guromdental.com
                        </p>
                        <p className="py-2">
                            <i className="fa-solid fa-location-dot"></i>
                            GurOm Dental, JM Road, Shivajinagar, Pune
                        </p>
                        </div>
                    </div>
                    <h6 className="copyright py-3">&copy; 2025 GurOm Dental. All Rights Reserved.</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
