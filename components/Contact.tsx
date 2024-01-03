import React from 'react';
import styles from '../styles/Home.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={`opacity-0 animate-fade-in ${styles.dancingText}`}>
      <h2>Contact</h2>
      <div>
          <p>
            Feel free to reach out to me! I am open to collaboration and always excited to discuss new
            opportunities.
          </p>
          <p>Email: fuenteskevin2015@gmail.com</p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/ketuvin" target="_blank" rel="noopener noreferrer">
              github.com/ketuvin
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/kevin-fuentes-2019/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/kevin-fuentes-2019
            </a>
          </p>
        </div>
    </section>
  );
};

export default Contact;
