import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import ProjectCard from './ProjectCard'; // Correct import path
import './ProjectCarousel.css'; // Ensure this file includes necessary styles

const ProjectCarousel = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const { transform } = useSpring({
    transform: `rotateY(${index * -360 / projects.length}deg)`,
  });

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel-container">
      <animated.div className="carousel" style={{ transform }}>
        {projects.map((project, i) => (
          <div className={`carousel-item ${i === index ? 'active' : ''}`} key={i}>
            <ProjectCard
              title={project.title}
              technologies={project.technologies}
              duration={project.duration}
              description={project.description}
            />
          </div>
        ))}
      </animated.div>
      <button className="carousel-button prev" onClick={handlePrev}>‹</button>
      <button className="carousel-button next" onClick={handleNext}>›</button>
    </div>
  );
};

export default ProjectCarousel;
