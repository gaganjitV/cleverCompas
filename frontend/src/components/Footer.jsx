import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo and Copyright */}
        <div className="footer-section footer-logo">
          <Link to="/">Clever Compass</Link>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Clever Compass. All rights reserved.
          </div>
        </div>

        {/* Need Support Section */}
        <div className="footer-section footer-support">
          <h3>Need Support?</h3>
          <p>Email: <a href="mailto:support@clevercompass.com">support@clevercompass.com</a></p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>

        {/* General Section */}
        <div className="footer-section footer-general">
          <h3>General</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        {/* Social Media Section */}
        <div className="footer-section footer-social">
        <h3 className="footer-title">Follow Us</h3>
          <div className="footer-icons"> 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
