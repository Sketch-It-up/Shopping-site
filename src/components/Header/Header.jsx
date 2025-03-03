import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";

function Header() { 
  const [scrolled,setscrolled] = useState(false);
  
  const HandleScroll = () => {
    const offsets = window.scrollY;

    if(offsets > 200) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  } ;

  useEffect(() => {
    window.addEventListener('scroll',HandleScroll)
  },[]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg nav_sec1 ${scrolled ? "sticky_nav1" : ""}`}>
        <div className="container-fluid">
          <NavLink to="/">
            <img src={logo} alt="logo" className="navbar-logo" />
          </NavLink>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <img 
            src="   https://cdn-icons-png.flaticon.com/512/16159/16159353.png " 
            width="30" 
            height="30" 
            alt="" 
            title="" 
            class="img-small"></img>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul">
              <li className="nav-li">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <NavLink to="/search" className="nav-icon">
                <i className="fas fa-search"></i>
              </NavLink>
              <NavLink to="/cart" className="nav-icon">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </div>
            {/* <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
