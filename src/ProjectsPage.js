import React from 'react';
import ProjectCarousel from './components/ProjectCarousel'; // Correct import path
import './ProjectsPage.css'; // Correct import path

const projects = [
  {
    title: 'Theta Tau Phi Epsilon Website',
    technologies: 'HTML, CSS, Python',
    duration: 'January 2024 - May 2024',
    description: 'Led the development of Theta Tau Phi Epsilon Chapter\'s website. Showcased fraternity highlights using HTML, CSS, and Python. Collaborated in an agile environment, participating in scrum meetings and sprints. Integrated a mock "Wordle" game, engaging users with fraternity-related keywords.'
  },
  {
    title: 'Defined Wraps Website',
    technologies: 'Python, HTML, CSS, Flask',
    duration: 'September 2023 - December 2023',
    description: 'Contributed to the development of a website for vehicle service quotes. Implemented email confirmation for accurate record-keeping. Ensured both clients and the company received proper documentation regarding quotes.'
  },
  {
    title: 'Theta Tau Rover Project',
    technologies: 'VexCode, RobotC',
    duration: 'September 2022 - November 2022',
    description: 'Led a team to design and code a miniature NASA-inspired Mars rover. Implemented functions in RobotC to control rover movements via a controller. Collaborated with various engineering majors, maintaining efficient communication and delegation.'
  },
  {
    title: 'TedBot',
    technologies: 'JavaScript, Git',
    duration: 'October 2022',
    description: 'Developed a Discord bot using JavaScript. Responded to user queries based on chat keywords. Simulated conversations between students and a virtual teacher through keyword recognition.'
  },
  {
    title: 'Lottery Simulator',
    technologies: 'Python, Replit',
    duration: 'April 2022',
    description: 'Developed a Lottery Simulator program using Python. Simulated the selection of six winning numbers within a range (0-69). Implemented user interaction for selecting lottery numbers and provided feedback on guesses. Ensured unique selections and calculated potential winnings. Designed a recursive structure for repeated plays, enhancing user engagement.'
  }
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <ProjectCarousel projects={projects} />
    </div>
  );
}

export default ProjectsPage;
