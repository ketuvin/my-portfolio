import React from 'react';
import styles from '../styles/Home.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={`opacity-0 animate-fade-in`}>
      <div className={styles.aboutMe}>
        <div className={styles.header}>
          <div className={styles.windowControls}>
            <div className={`${styles.closeButton} closeButton`} />
            <div className={`${styles.minimizeButton} minimizeButton`} />
            <div className={`${styles.maximizeButton} maximizeButton`} />
          </div>
          <div className={styles.titleBar}>
            <span className={styles.editorTitle}>AboutMe.md - [Read-Only]</span>
          </div>
        </div>
        <div className={styles.editor}>
          <p className={styles.editorText}>
            I build scalable web applications primarily with Next.js, TypeScript, and Tailwind. I’ve contributed to projects in e-commerce, healthcare, airlines, and government sectors (DHSUD & PhilHealth in the Philippines), I specialize in frontend UI/UX while having a solid understanding of backend architecture and API development. Passionate about clean code, performance, and seamless user experiences. I also incorporate AI-assisted development to enhance productivity and optimize code quality.<span className={styles.cursor}></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
