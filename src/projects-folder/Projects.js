import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Ensure this is the correct path to your Navbar component
import TypingAnimation from '../components/TypingAnimation'; // Adjust the path as needed
import './Projects.css'; // Create this file for your custom styles
import hrrprconsulting from './hrrprconsulting.png';
import thetatau from './thetatau.png';
import iota from './iota.jpg';
import discord from './discord.webp';
import lottery from './lottery.jpg';
import defined from './defined.png';

const projects = [
  {
    title: 'HRR PR Consulting Website',
    description: 'Built and manage the website for HRR PR Consulting',
    link: 'https://hrrprconsulting.com/',
    date: 'March 2024 - April 2024',
    image: hrrprconsulting,
  },
  {
    title: 'Theta Tau Phi Epsilon Chapter Website',
    description: 'Built and manage the website for the Phi Epsilon Chapter',
    link: 'https://csufthetatau-web.github.io/index.html',
    date: 'January 2024 - May 2024',
    image: thetatau,
  },
  {
    title: 'Defined Wraps Website',
    description: 'Software Engineering Project utilizing Python and Flask',
    link: 'https://github.com/jrodriguez0423/definedwraps/tree/main',
    date: 'September 2023 - December 2023',
    image: defined,
  },
  {
    title: 'Theta Tau Rover Project',
    description: 'Miniature NASA inspired rover',
    link: '',
    date: 'September 2022 - December 2022',
    image: iota,
  },
  {
    title: 'Tedbot',
    description: 'Discord bot that simulates conversations with a band teacher',
    link: 'https://github.com/jrodriguez0423/TedBot',
    date: 'October 2022',
    image: discord,
  },
  {
    title: 'Lottery Simulator',
    description: 'Terminal based lottery game that generates 6 random lottery numbers',
    link: 'https://replit.com/@jrodriguez2022/LotterySim',
    date: 'January 2022 - May 2022',
    image: lottery,
  },
  // Add more projects as needed
];

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section className="projects-section">
        <div className="container scrollable-container">
          <h2 className="section-title">
            <TypingAnimation text="My Projects" speed={100} />
          </h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-date">{project.date}</p>
                  <a
                    href={project.link || "#"}
                    className={`project-link ${!project.link ? "disabled" : ""}`}
                    target={project.link ? "_blank" : "_self"}
                    rel={project.link ? "noopener noreferrer" : ""}
                    onClick={(e) => !project.link && e.preventDefault()}
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
