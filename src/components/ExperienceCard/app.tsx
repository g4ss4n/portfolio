import React from 'react';
import './app.css'; 
interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, date, description }) => (
  <div className="experience-card">
    <h3>{title}</h3>
    <p className="company">{company}</p>
    <p className="date">{date}</p>
    <ul className="description">
      {description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
