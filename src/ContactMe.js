import React from 'react';
import Navbar from './components/Navbar'; // Ensure this is the correct path to your Navbar component
import './ContactMe.css'; // Ensure this file exists and includes necessary styles
import './components/Footer.css'; // Ensure this file exists and includes necessary styles

const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-me-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <form action="https://formspree.io/f/xkndepnl" method="POST" className="contact-form">
            <label className="form-label">
              Your email:
              <input type="email" name="email" className="form-input" required />
            </label>
            <label className="form-label">
              Your phone number:
              <input type="tel" name="phone" className="form-input" required />
            </label>
            <label className="form-label">
              Your message:
              <textarea name="message" className="form-textarea" required></textarea>
            </label>
            <button type="submit" className="form-button">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
