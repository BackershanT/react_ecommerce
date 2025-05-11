import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Contact Info */}
        <div className="footer-column">
          <h3>MyShop</h3>
          <p><FaWhatsapp /> WhatsApp</p>
          <p><FaPhoneAlt /> +91 000-000-1212</p>
          <p><FaEnvelope /> info@myshop@gmail.com</p>
          <h4>Download App</h4>
          <div className="app-links">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/135px-Available_on_the_App_Store_%28black%29_SVG.svg.png?20130522010834" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
          </div>
        </div>

        {/* Column 2: Popular Categories */}
        <div className="footer-column">
          <h4>Most Popular Categories</h4>
          <ul>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Snacks & Foods</li>
            <li>Noodles & Pasta</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Column 3: Customer Services */}
        <div className="footer-column">
          <h4>Customer Services</h4>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All rights reserved. Backershan T</p>
      </div>
    </footer>
  );
};

export default Footer;
