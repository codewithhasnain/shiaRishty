import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <a href="#about-us">About Us</a>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </div>
      <div className="footer-info">
        <p>
          Shia Rishty - A project by SHIA RISHTY 
        </p>
        <p>Copyright © 2024 Shia Rishty - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
