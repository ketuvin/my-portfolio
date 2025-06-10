import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
  return (
    <div id="profile" className="px-8 py-12 mb-12 xl:mb-0 animate-fade-in">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={'/images/profile.png'}
          alt={`Profile`}
          width={125}
          height={125}
          className="shadow-md rounded-2xl border w-fit"
        />
        <h2 className='text-2xl text-center font-bungee-spice'>Kevin Fuentes</h2>
        <p className='bg-gray-700 p-2 rounded-xl text-white text-sm mb-2'>Full Stack Developer</p>
        <hr className='w-full h-[3px] bg-zinc-300' />
        <div className="mt-4 flex flex-col gap-y-6">
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <FontAwesomeIcon icon={faEnvelope} className="p-4 text-xl text-orange-600" />
            <div className="w-full">
              <p className="opacity-50 text-xs">EMAIL</p>
              <p className="text-wrap">fuenteskevin2015@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <FontAwesomeIcon icon={faPhone} className="p-4 text-xl text-orange-600" />
            <div className="w-full">
              <p className="opacity-50 text-xs">PHONE</p>
              <p>+63 936 179 5487</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <FontAwesomeIcon icon={faCalendar} className="p-4 text-xl text-orange-600" />
            <div className="w-full">
              <p className="opacity-50 text-xs">BIRTHDAY</p>
              <p>December 03, 1998</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <FontAwesomeIcon icon={faMapPin} className="p-4 text-xl text-orange-600" />
            <div className="w-full">
              <p className="opacity-50 text-xs">LOCATION</p>
              <p>Iligan City, 9200</p>
              <p>Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;