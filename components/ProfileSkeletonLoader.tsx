import React from 'react';

const ProfileSkeletonLoader: React.FC = () => {
  return (
    <div id="profile" className="px-8 py-12 mb-12 xl:mb-0 animate-pulse">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-[125px] h-[125px] bg-gray-300 rounded-2xl"></div>
        <div className="h-8 w-40 bg-gray-300 rounded"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        <hr className='w-full h-[3px] bg-zinc-300' />
        <div className="my-4 flex flex-col gap-y-6 w-full">
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
            </div>
            <div className="w-full">
              <div className="h-3 w-16 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
            </div>
            <div className="w-full">
              <div className="h-3 w-20 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-5 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="w-full">
              <div className="h-3 w-20 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-28 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
            </div>
            <div className="w-full">
              <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeletonLoader;

