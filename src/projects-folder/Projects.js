import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this is the correct path to your Navbar component
import './Projects.css'; // Create this file for your custom styles
import hrrprconsulting from './hrrprconsulting.png';
import thetatau from './thetatau.png'
import iota from './iota.jpg';
import discord from './discord.jpg';
import lottery from './lottery.png';

const projects = [
  {
    title: 'HRR PR Consulting Website',
    description: 'Built and manage the website for HRR PR Consulting',
    link: 'https://hrrprconsulting.com/',
    image: hrrprconsulting,
  },
  {
    title: 'Theta Tau Phi Epsilon Chapter Website',
    description: 'Built and manage the website for the Phi Epsilon Chapter',
    link: 'https://csufthetatau-web.github.io/index.html',
    image: thetatau,
  },
  {
    title: 'Defined Wraps Website',
    description: 'Software Engineering Project utilizing Python and Flask',
    link: '#',
    image: '/photos/thetatau.png',
  },
  {
    title: 'Theta Tau Rover Project',
    description: 'Miniature NASA inspired rover',
    link: '',
    image: iota,
  },
  {
    title: 'Tedbot',
    description: 'Discord bot that simulates conversations with a band teacher',
    link: '',
    image: discord,
  },
  {
    title: 'Lottery Simulator',
    description: 'Small scale lottery game that generates 6 random numbers',
    link: '',
    image: lottery,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="projects-section">
        <div className="container scrollable-container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Projects;
