import React from 'react';
import './app.css'; 

const Profile: React.FC = () => (
  <section id="profile" className="profile">
    <div className="profile-left">
      <img src="/profile.jpg" alt="Profile" className="profile-image" />
    </div>
    <div className="profile-right">
      <h2>Ghassan Gharzuzy</h2>
      <p>Software Quality Assurance & Automation Developer | Computer Science Student</p>
      <div className="profile-description">
        <h3>Profile</h3>
        <p>
          Experienced team collaborator, skilled in working with diverse groups.
          Quick learner with strong people skills.
        </p>
      </div>
    </div>
  </section>
);

export default Profile;
