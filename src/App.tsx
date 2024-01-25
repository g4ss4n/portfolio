import React from 'react';
import Header from './components/Header/app';
import Profile from './components/Profile/app';
import Experience from './components/Experience/app';
import Education from './components/Education/app';
import Skills from './components/Skills/app';
import Contact from './components/Contact/app';
import './App.css';
import Projects from './components/Projects/app';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Profile />
    <Experience />
    <Projects />
    <Education />
    <Skills />
    <Contact />
  </div>
);

export default App;