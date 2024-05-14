import React from 'react';
import TypingAnimation from './components/TypingAnimation'; // Adjust the path as needed
import './HeroSection.css'; // Ensure this file exists and includes necessary styles

const HeroSection = () => {
  return (
    <section>
      <div className="hero text-dark" style={{ marginTop: "55px" }}>
        <div className="container d-flex align-items-center h-100">
          <div className="hero-text-container">
            <h1 className="hero-greeting">Hi! I'm Justin,</h1>
            <TypingAnimation text="Full Stack Developer" speed={25} style={{ textAlign: "left" }} /> {/* Set to 25ms for faster typing */}
          </div>
        </div>
      </div>
      <div className="introduction-section">
        <h2 className="introduction-heading">Who I am</h2>
        <div className="container">
          <div className="introduction-container">
            <div className="introduction-box">
              <p className="introduction-text">
                I'm a passionate Full Stack Developer with experience in building web applications using modern technologies like React and Node.js.<br></br>
                <br></br>I love solving problems and creating efficient, scalable, and user-friendly applications.<br></br>
                <br></br>When I'm not coding, you can find me exploring new tech trends, producing music, or playing golf. <br></br>
                <br></br>Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
}

export default HeroSection;
