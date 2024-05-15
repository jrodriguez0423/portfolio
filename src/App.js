import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './HeroSection';
import Projects from './projects-folder/Projects'; 
import AboutMe from './about-me/AboutMe';
import Footer from './components/Footer'; // Correct the import path
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './ContactMe';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
