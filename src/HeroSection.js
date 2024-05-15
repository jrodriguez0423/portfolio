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
            <TypingAnimation text="Full Stack Developer" speed={35} style={{ textAlign: "left" }} /> {}
          </div>
          <a href="contact" className="contact-button">Contact Me</a>
        </div>
      </div>
      <div className="introduction-section">
        <h2 className="introduction-heading">Who I am</h2>
        <div className="container">
          <div className="introduction-container">
            <div className="introduction-box">
              <p className="introduction-text">
                I'm a passionate Full Stack Developer with experience in building web applications using modern technologies like React and Node.js.<br></br>
                <br></br> I also have experience in building mobile apps using Flutter. <br></br>
                <br></br>I love solving problems and creating efficient, scalable, and user-friendly applications.<br></br>
                <br></br>When I'm not coding, you can find me exploring new tech trends, producing music, or golfing. <br></br>
                <br></br>Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
