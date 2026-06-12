import React from 'react';

const ProjectsSkeletonLoader: React.FC = () => {
  return (
    <div className="px-8 mt-5 animate-pulse flex flex-col h-full">
      <div className="h-9 w-36 bg-gray-300 rounded mb-6 shrink-0"></div>

      {/* Mobile skeleton */}
      <div className="md:hidden flex pb-2 gap-x-2 mb-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="h-[520px] w-full min-w-[280px] rounded-lg bg-gray-300 flex-shrink-0"></div>
        ))}
      </div>

      {/* Desktop skeleton */}
      <div className="hidden md:flex flex-col flex-1 min-h-0 gap-4">
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="h-8 w-20 bg-gray-300 rounded-full"></div>
          ))}
        </div>
        <div className="flex gap-2 mb-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="h-10 w-32 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
        <div className="flex-1 grid lg:grid-cols-2 gap-6">
          <div className="h-64 lg:h-full bg-gray-300 rounded-lg"></div>
          <div className="space-y-3">
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="flex gap-2 mt-4">
              <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
              <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 w-64 bg-gray-300 rounded mt-4 mb-8 self-center shrink-0"></div>
    </div>
  );
};

export default ProjectsSkeletonLoader;
