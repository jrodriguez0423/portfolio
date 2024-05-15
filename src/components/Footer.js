import React from 'react';
import './Footer.css'; // Ensure this file exists and includes necessary styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-center">
        <a href="https://www.linkedin.com/in/justin-rodriguez-575875252/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/justinprodri/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/jrodriguez0423/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="container d-flex justify-content-center">
        <p className="copyright-text">© 2024 Justin Rodriguez. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
