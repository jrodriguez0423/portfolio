import React from 'react';
import Navbar from './components/Navbar'; // Ensure this is the correct path to your Navbar component
import './AboutMe.css'; // Ensure this file exists and includes necessary styles
import './components/Footer.css'; // Ensure this file exists and includes necessary styles
import justinImage from './photos/justin.jpg'; // Adjust the path as needed

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <section className="about-me-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="creators-container">
            <div className="creator-card">
              <img src={justinImage} alt="Justin Rodriguez" className="creator-image" />
              <h3 className="creator-name">Justin Rodriguez</h3>
              <p className="creator-title">Co-Founder</p>
              <p className="creator-description">
                Justin Rodriguez, pursuing a degree in Computer Science at California State University Fullerton, co-launched Divine Software Systems, with a comprehensive vision aimed at integrating cutting-edge technology with strategic business approaches. His firm commitment to tackling complex digital challenges highlights the company's dedication to providing bespoke web and mobile application services, tailored to meet the specific needs of their diverse clientele. This initiative reflects a broader commitment to leveraging technology to enhance business strategy and operations, ensuring that Divine Software Systems LLC remains at the forefront of digital innovation and solution provision.
              </p>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default AboutMe;
