import React from 'react';
import { FaEye } from 'react-icons/fa';

const CV_URL =
  'https://drive.google.com/file/d/16m8_pxgO_zVMU1fW4rTQzdAy_RMj4CPb/view?usp=sharing';

const ViewResumeFAB: React.FC = () => {
  return (
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View CV"
      className="fixed z-50 bottom-6 right-6 group focus:outline-none"
      tabIndex={0}
    >
      <div className="relative flex items-center bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 shadow-lg rounded-full overflow-hidden cursor-pointer transition-all duration-300 w-14 h-14 group-hover:w-44 group-focus:w-44">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:static group-focus:static group-hover:translate-x-0 group-hover:translate-y-0 group-focus:translate-x-0 group-focus:translate-y-0 w-14 h-14 flex items-center justify-center group-hover:w-12 group-focus:w-12">
          <FaEye className="text-white text-2xl" />
        </div>
        <span className="whitespace-nowrap text-white font-semibold px-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 text-base">
          View CV
        </span>
      </div>
    </a>
  );
};

export default ViewResumeFAB;
