import React, { useState } from 'react';
import Head from 'next/head';
import About from '../components/About';
import Projects from '../components/Projects';
import Profile from '../components/Profile';
import Navbar from '../components/Navbar';
import QuickLinks from '../components/QuickLinks';
import DownloadResumeFAB from '../components/DownloadResumeFAB';

const Home: React.FC = () => {
  const [ activeSection, setActiveSection ] = useState('about');

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="container p-10 flex flex-col gap-4 min-h-max xl:grid xl:grid-cols-12 xl:grid-rows-[1fr]">
        <section className="xl:col-span-3 relative h-full">
          <Profile />
          <QuickLinks />
        </section>
        <section className="xl:col-span-9 relative h-full">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
        </section>
      </div>
      <DownloadResumeFAB />
    </>
  );
};

export default Home;
