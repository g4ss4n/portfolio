import React from 'react';
import './app.css'; // Import the CSS file for the education section

const Education: React.FC = () => (
  <section id="education">
    <h2>Education and Courses</h2>
    <div className="education-card">
      <h4>Computer Science BSc.</h4>
      <p className="institution">University Of Haifa</p>
      <p className="date">Oct 2019 - Oct 2024 | Present</p>
    </div>
    <div className="education-card">
      <h4>Full Stack Web Development Bootcamp</h4>
      <p className="institution">Kav Mashve</p>
      <p className="date">July 2019 - Oct 2019</p>
    </div>
  </section>
);

export default Education;
