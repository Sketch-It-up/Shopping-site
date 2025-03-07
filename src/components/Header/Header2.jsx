import { useState, useContext } from "react";
import "./header2.css";
import newlogo from "../../assets/logo11.png";
import MenuIcon from "../../assets/Menu_.png";
import CloseIcon from "../../assets/Menu_.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { Context } from "../../utils/context";

const Header2 = ({ toggleCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useContext(Context);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={newlogo} alt="logo" className="logo" />
          <a href="/" className="site-title">GurOm Dental</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="menu-button">
          <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menu Toggle" />
        </button>

        {/* Navigation for larger screens */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          <div className="d-flex align-items-center">
            <NavLink to="/search" className="nav-icon">
              <i className="fas fa-search"></i>
            </NavLink>
            <i
              className="fas fa-shopping-cart nav-icon"
              onClick={toggleCart}
            ></i>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/products" onClick={toggleMenu}>Products</a>
          <a href="/about" onClick={toggleMenu}>About</a>
          <a href="/contact" onClick={toggleMenu}>Contact</a>
        </nav>      
      )}
    </header>
  );
};

export default Header2;