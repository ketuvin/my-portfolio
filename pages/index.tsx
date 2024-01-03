import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />

      <About />

      <Projects />

      <Contact />
    </div>
  );
};

export default Home;
