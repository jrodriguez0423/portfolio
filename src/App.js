import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './HeroSection';
import ProjectsPage from './ProjectsPage'; // Assuming you have this component
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMe />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
