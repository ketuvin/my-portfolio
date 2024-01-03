import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header: React.FC = () => {
  return (
    <header className={`transition-opacity`}>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Kevin Fuentes',
          1000,
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: '4em', display: 'inline-block' }}
        repeat={Infinity}
      />
      <p className="opacity-0 animate-fade-in">Full Stack Developer</p>
    </header>
  );
};

export default Header;
