import React from 'react';
import './ProjectCard.css'; // Ensure this file includes necessary styles

const ProjectCard = ({ title, technologies, duration, description }) => {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-technologies"><strong>Technologies:</strong> {technologies}</p>
      <p className="project-card-duration"><strong>Duration:</strong> {duration}</p>
      <p className="project-card-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
