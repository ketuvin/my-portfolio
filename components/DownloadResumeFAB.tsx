import React from 'react';
import { FaDownload } from 'react-icons/fa';

const RESUME_URL = 'https://drive.google.com/file/d/19pcX20DFzYW6IAC3PEa1rR8y-OBB0sLY/view?usp=sharing';

const DownloadResumeFAB: React.FC = () => {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume"
      className="fixed z-50 bottom-6 right-6 group focus:outline-none"
      tabIndex={0}
    >
      <div className="relative flex items-center bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 shadow-lg rounded-full overflow-hidden cursor-pointer transition-all duration-300 w-14 h-14 group-hover:w-56 group-focus:w-56">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:static group-focus:static group-hover:translate-x-0 group-hover:translate-y-0 group-focus:translate-x-0 group-focus:translate-y-0 w-14 h-14 flex items-center justify-center group-hover:w-12 group-focus:w-12">
          <FaDownload className="text-white text-2xl" />
        </div>
        <span className="whitespace-nowrap text-white font-semibold px-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 text-base ml-0 group-hover:ml-0 group-focus:ml-0">
          Download Resume
        </span>
      </div>
    </a>
  );
};

export default DownloadResumeFAB; 