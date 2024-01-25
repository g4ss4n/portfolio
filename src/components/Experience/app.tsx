import React from 'react';
import ExperienceCard from '../ExperienceCard/app';
import './app.css'; 

const Experience: React.FC = () => (
  <section id="experience">
    <h2>Experience and Employment History</h2>
    <ExperienceCard
      title="QA and Automation Developer"
      company="Agwafarm"
      date="Feb 2023 – Present"
      description={[
        "Lead the responsibility of conducting comprehensive automated tests prior to deployment in both CI and test environments, including manual testing processes.",
        "Pioneered the establishment of an efficient testing infrastructure using Cypress and Appium, successfully executing sanity tests across both web and native mobile applications.",
        "Created and integrated AWS Lambdas to improve test setups and tear-downs, enhancing testing efficiency.",
        "Actively collaborated with the development and product teams, contributing to the implementation of various features and enhancements in the system.",
      ]}
    />
    <ExperienceCard
      title="QA and Automation Developer"
      company="Informatica"
      date="Feb 2022 – Feb 2023"
      description={[
        "Developed test plans, encompassing E2E, Backend, and Frontend automated tests, utilizing Postman and the CodeceptJS (Javascript-based) framework, ran via Jenkins.",
        "Collaborated closely with cross-functional teams including Frontend and Backend developers, UX/UI and Product Managers.",
      ]}
    />
    <ExperienceCard
      title="Test Automation Technical Support"
      company="Testim.io - now Tricentis"
      date="Feb 2020 – Feb 2022"
      description={[
        "Deliver continuous 24/7 client support in Testim.io platform.",
        "Efficiently report bugs from our development team.",
        "Offer effective workarounds to ensure seamless customer experience.",
      ]}
    />
  </section>
);

export default Experience;

