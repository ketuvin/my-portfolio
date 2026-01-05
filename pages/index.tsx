import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import QuickLinks from '../components/QuickLinks';
import DownloadResumeFAB from '../components/DownloadResumeFAB';
import AboutSkeletonLoader from '../components/AboutSkeletonLoader';
import ProjectsSkeletonLoader from '../components/ProjectsSkeletonLoader';
import ProfileSkeletonLoader from '../components/ProfileSkeletonLoader';

const Profile = dynamic(() => import('../components/Profile'), {
  loading: () => <ProfileSkeletonLoader />,
  ssr: false,
});

const About = dynamic(() => import('../components/About'), {
  loading: () => <AboutSkeletonLoader />,
  ssr: false,
});

const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <ProjectsSkeletonLoader />,
  ssr: false,
});

const Home: React.FC = () => {
  const [ activeSection, setActiveSection ] = useState('about');

  return (
    <>
      <Head>
        <title>Kevin Fuentes - Portfolio Website</title>
      </Head>
      <div className="max-w-full xl:mx-auto p-4 xl:p-0 flex flex-col gap-4 min-h-max xl:grid xl:grid-cols-12 xl:grid-rows-[1fr]">
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
