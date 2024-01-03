import React from 'react';
import styles from '../styles/Home.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={`opacity-0 animate-fade-in ${styles.dancingText}`}>
      <h2>About Me</h2>
      <p>
        I am an experienced Full Stack Developer with 5 years of expertise in front-end and back-end technologies. I specialize in creating innovative web applications that address real-world challenges. My diverse project background spans e-commerce, healthcare, airlines, and government sectors. In my role, I have successfully delivered end-to-end solutions, handling UI implementation, server-side logic, database integration, and third-party API connectivity. I follow best practices such as DRY, KISS, and SOLID principles to ensure code quality. My collaborative approach with cross-functional teams ensures a thorough understanding of project requirements. I bring proficiency in various technologies, including React, Typescript, NextJS, Laravel, Yii2, Bootstrap, Tailwind, Chakra, SASS, and styled components. I have worked with databases such as MySQL, PostgreSQL, NoSQL, and Firebase. Tools like Git, Docker, Postman, Swagger, Segment, Google Analytics 4, Algolia, Sentry, and Honeycomb are integral to my workflow. My expertise extends to Golang, GraphQL, jQuery, HTML5, CSS3, Vanilla JavaScript, and familiarity with AWS, Vercel, Heroku for devops. Comfortable on both Windows and Ubuntu OS, I have honed a comprehensive understanding of the entire software development lifecycle.My expertise extends to Golang, GraphQL, jQuery, HTML5, CSS3, Vanilla JavaScript, and familiarity with AWS, Vercel, Heroku for devops. Comfortable on both Windows and Ubuntu OS, I have honed a comprehensive understanding of the entire software development lifecycle.
      </p>
    </section>
  );
};

export default About;
