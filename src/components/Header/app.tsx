import React from 'react';
import './app.css'; // Import the CSS file for the header styles

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <a href="#profile" className="nav-link">Profile</a>
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#education" className="nav-link">Education</a>
      <a href="#skills" className="nav-link">Skills</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  </header>
);

export default Header;