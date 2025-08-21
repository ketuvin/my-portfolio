import React from 'react';

const ProjectsSkeletonLoader: React.FC = ()  => {
  return (
    <div className="px-8 mt-5 animate-pulse flex flex-col">
      <div className="h-9 w-36 bg-gray-300 rounded mb-6"></div>
      <div className="flex pb-2 gap-x-2 mb-4">
        {Array.from({ length: 4 }).map((skill, idx) => (
          <div key={idx} className="h-[587px] w-[300px] rounded-lg bg-gray-300"></div>
        ))}
      </div>
      <div className="h-6 w-40 bg-gray-300 rounded self-center"></div>
      <div className="h-6 w-[400px] bg-gray-300 rounded mt-4 mb-8 self-center"></div>
    </div>
  );
};

export default ProjectsSkeletonLoader;