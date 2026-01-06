import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
  return (
    <div id="profile" className="px-8 py-12 mb-12 xl:mb-0 animate-fade-in">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <Image
          src={'/images/Profile2.png'}
          alt={`Profile`}
          width={125}
          height={125}
          quality={100}
          className="shadow-md w-fit rounded-2xl border"
        />
        <h2 className='text-2xl text-center font-bungee-spice'>Kevin Fuentes</h2>
        <p className='bg-gray-700 p-2 rounded-xl text-white text-sm mb-2'>Full Stack Developer</p>
        <hr className='w-full h-[3px] bg-zinc-300' />
        <div className="my-4 flex flex-col gap-y-6">
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl text-orange-600" fixedWidth />
            </div>
            <div className="w-full">
              <p className="opacity-50 text-xs">EMAIL</p>
              <p className="text-wrap">fuenteskevin2015@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faPhone} className="text-xl text-orange-600" fixedWidth />
            </div>
            <div className="w-full">
              <p className="opacity-50 text-xs">WHATSAPP</p>
              <p>+63 936 179 5487</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-5 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faMapPin} className="text-2xl text-orange-600" fixedWidth />
            </div>
            <div className="w-full">
              <p className="opacity-50 text-xs">LOCATION</p>
              <p>Iligan City, 9200</p>
              <p>Philippines</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 md:justify-between">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange-600" fixedWidth />
            </div>
            <div className="w-full">
              <p className="opacity-50 text-xs">AVAILABILITY</p>
              <p>Remote only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;