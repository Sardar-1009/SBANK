import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-social">
          <a href="#" className="social-icon">YouTube</a>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">LinkedIn</a>
        </div>

        
        <hr className="footer-divider" />

        
        <div className="footer-bottom">
          <p className="footer-text">CompanyName © 202X. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Eleven</a>
            <a href="#" className="footer-link">Twelve</a>
            <a href="#" className="footer-link">Thirteen</a>
            <a href="#" className="footer-link">Fourteen</a>
            <a href="#" className="footer-link">Fifteen</a>
            <a href="#" className="footer-link">Sixteen</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
