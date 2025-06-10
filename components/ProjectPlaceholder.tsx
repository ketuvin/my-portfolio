import React from 'react';

const ProjectPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-[165px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
      <div className="text-center">
        <div className="text-4xl mb-2">📁</div>
        <p className="text-gray-600 text-sm">No preview available</p>
      </div>
    </div>
  );
};

export default ProjectPlaceholder;