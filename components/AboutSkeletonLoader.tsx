import React from 'react';

const AboutSkeletonLoader: React.FC = ()  => {
  return (
    <div className="px-8 mt-5 animate-pulse flex flex-col">
      <div className="h-9 w-36 bg-gray-300 rounded mb-6"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-3/6 bg-gray-300 rounded mb-6"></div>
      <div className="h-16 w-56 bg-gray-300 rounded mb-4 flex self-center"></div>
      <div className="h-6 w-16 bg-gray-300 rounded mb-2"></div>
      <div className="flex flex-wrap gap-3 mb-8">
        {Array.from({ length: 55 }).map((skill, idx) => (
          <div key={idx} className="flex items-center h-8 w-24 gap-2 bg-gray-300 px-3 py-1 rounded-full font-semibold text-gray-700 shadow-sm"></div>
        ))}
      </div>
      <div className="h-7 w-32 bg-gray-300 rounded mb-4"></div>
      <div className="h-20 bg-gray-300 rounded mb-6"></div>
    </div>
  );
};

export default AboutSkeletonLoader;