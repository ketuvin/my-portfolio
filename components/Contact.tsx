import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={`opacity-0 animate-fade-in ${styles.contactSection}`}>
      <h2>Contact</h2>
      <div className={styles.contactInfo}>
        <p>
          Feel free to reach out to me! I am open to collaboration and always excited to discuss new opportunities.
        </p>
        <div className={styles.contactIcons}>
          <a href="mailto:fuenteskevin2015@gmail.com" className={styles.iconLink}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
          <a href="https://github.com/ketuvin" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/kevin-fuentes-2019/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
