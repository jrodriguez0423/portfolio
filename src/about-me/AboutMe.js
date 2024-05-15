import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Ensure this is the correct path to your Navbar component
import TypingAnimation from '../components/TypingAnimation'; // Adjust the path as needed
import './AboutMe.css'; // Ensure this file exists and includes necessary styles
import '../components/Footer.css'; // Ensure this file exists and includes necessary styles
import justinImage from '../photos/justin.jpg'; // Adjust the path as needed

import company1 from './sbovacom.webp';
import company2 from './woa.png';
import company3 from './farmers.jpeg';
import company4 from './hrrpr.png';
import company5 from './monarka.png';
import company6 from './floors4less.png';

const companies = [
  { id: 1, image: company1, name: 'Sbovacom' },
  { id: 2, image: company2, name: 'Wings Of Angels Transportation Services' },
  { id: 3, image: company3, name: 'Patrick Rodriguez Farmers Insurance' },
  { id: 4, image: company4, name: 'HRR PR Consulting' },
  { id: 5, image: company5, name: 'Monarka Roofing' },
  { id: 6, image: company6, name: 'Floors 4 Less' },
];

const AboutMe = () => {
  useEffect(() => {
    const container = document.querySelector('.about-me-container');
    if (container) {
      container.classList.add('fade-in');
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const textSection = document.querySelector('.section-title-companies');
    const companyCards = document.querySelectorAll('.company-card');

    if (textSection) observer.observe(textSection);
    companyCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      if (textSection) observer.unobserve(textSection);
      companyCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section className="about-me-section">
        <div className="container about-me-container">
          <h2 className="section-title">
            <TypingAnimation text="About Me" speed={100} />
          </h2>
          <div className="creators-container">
            <div className="creator-card">
              <img src={justinImage} alt="Justin Rodriguez" className="creator-image" />
              <h3 className="creator-name">Justin Rodriguez</h3>
              <p className="creator-title">
                Co-Founder of <a href="https://divinesoftwaresystems.com" className="creator-link">Divine Software Systems</a>
              </p>
              <p className="creator-description">
                Justin Rodriguez, pursuing a degree in Computer Science at California State University Fullerton, co-launched Divine Software Systems, with a comprehensive vision aimed at integrating cutting-edge technology with strategic business approaches. His firm commitment to tackling complex digital challenges highlights the company's dedication to providing bespoke web and mobile application services, tailored to meet the specific needs of their diverse clientele. This initiative reflects a broader commitment to leveraging technology to enhance business strategy and operations, ensuring that Divine Software Systems LLC remains at the forefront of digital innovation and solution provision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="companies-section">
        <h2 className="section-title section-title-companies">
          Companies I Have Worked With
        </h2>
        <div className="companies-container">
          {companies.map((company) => (
            <div className="company-card" key={company.id}>
              <img src={company.image} alt={company.name} className="company-image" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
