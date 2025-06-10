import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const QuickLinks: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 mb-8 flex items-center justify-center gap-3">
      <a href="mailto:fuenteskevin2015@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-600" />
      </a>
      <a href="https://github.com/ketuvin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-600" />
      </a>
      <a href="https://www.linkedin.com/in/kevin-fuentes-2019/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-600" />
      </a>
    </div>
  );
};

export default QuickLinks;