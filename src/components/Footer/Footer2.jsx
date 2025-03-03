import React from "react";
import "./Footer.css";
import newlogo from "../../assets/logo11.png";
import SocialX from "../../assets/social-x.svg";
import SocialInsta from "../../assets/social-insta.svg";
import SocialLinkedIn from "../../assets/social-linkedin.svg";
import SocialPin from "../../assets/social-pin.svg";
import SocialYoutube from "../../assets/social-youtube.svg";

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left Column */}
          <div className="footer-left">
            <img src={newlogo} alt="logo" className="logo" />
            <h2 className="footer-title">GurOm Dental</h2>
            <p className="footer-subtitle">Your Smile, Our Priority!</p>
          </div>

          {/* Center Columns */}
          <div className="footer-center">
            <div>
              <h3 className="footer-heading">Information</h3>
              <ul>
                <li>
                  <a href="/#">Home</a>
                </li>
                <li>
                  <a href="/AboutUsPage">About Us</a>
                </li>
                <li>
                  <a href="#">Shop Now</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-heading">Helpful Links</h3>
              <ul>
                <li>
                  <a href="/#services">Our Services</a>
                </li>
                <li>
                  <a href="/ContactUsPage">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="footer-right">
            <h3 className="footer-heading">Contact Us</h3>
            <ul>
              <li>Phone: +91 124567890</li>
              <li>
                Email:{" "}
                <a href="mailto:info@guromdental.com" className="footer-email">
                  info@guromdental.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
          <div className="footer-social">
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
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

        {/* Copyright */}
        <p className="footer-copyright">
          &copy; 2024 SketchItUp, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
