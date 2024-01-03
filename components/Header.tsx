import React from 'react';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
  return (
    <header className={`transition-opacity ${styles.dancingText}`}>
      <h1 className="font-bold mb-2 opacity-0 animate-fade-in">Kevin Fuentes</h1>
      <p className="opacity-0 animate-fade-in">Full Stack Developer</p>
    </header>
  );
};

export default Header;
