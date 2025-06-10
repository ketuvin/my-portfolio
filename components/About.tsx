import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaWordpress, FaBootstrap, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiStoryblok, SiChakraui, SiApollographql, SiGo, SiPhp, SiYii, SiJquery, SiRedux, SiVercel, SiHeroku, SiFirebase, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiAlgolia, SiSentry, SiSwagger, SiBitbucket, SiGithub, SiJira, SiTrello, SiGoogle, SiShopify, SiNativescript, SiCrowdin } from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'SASS', icon: <FaSass className="text-pink-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'Chakra UI', icon: <SiChakraui className="text-teal-500" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
  
  // State Management & API
  { name: 'Zustand', icon: <span className="text-orange-500 font-bold">🐻</span> },
  { name: 'Redux', icon: <SiRedux className="text-purple-700" /> },
  { name: 'Apollo GraphQL', icon: <SiApollographql className="text-pink-600" /> },
  { name: 'Storyblok', icon: <SiStoryblok className="text-blue-400" /> },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Golang', icon: <SiGo className="text-blue-500" /> },
  { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
  { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
  { name: 'Yii/Yii2', icon: <SiYii className="text-green-700" /> },
  { name: 'jQuery', icon: <SiJquery className="text-blue-700" /> },
  
  // Cloud & DevOps
  { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black" /> },
  { name: 'Heroku', icon: <SiHeroku className="text-purple-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-orange-500" /> },
  
  // Databases
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-800" /> },
  { name: 'SQL Server', icon: <span className="text-red-600 font-bold">🗄️</span> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
  { name: 'ElasticSearch', icon: <SiElasticsearch className="text-green-700" /> },
  { name: 'Algolia', icon: <SiAlgolia className="text-blue-600" /> },
  
  // Testing & Monitoring
  { name: 'Playwright', icon: <span className="text-green-600 font-bold">🎭</span> },
  { name: 'Sentry', icon: <SiSentry className="text-orange-600" /> },
  { name: 'Honeycomb', icon: <span className="text-orange-500 font-bold">🍯</span> },
  { name: 'Swagger', icon: <SiSwagger className="text-green-600" /> },
  
  // Version Control & Project Management
  { name: 'Git', icon: <FaGitAlt className="text-orange-700" /> },
  { name: 'Bitbucket', icon: <SiBitbucket className="text-blue-600" /> },
  { name: 'GitHub', icon: <SiGithub className="text-black" /> },
  { name: 'Jira', icon: <SiJira className="text-blue-600" /> },
  { name: 'Trello', icon: <SiTrello className="text-blue-500" /> },
  { name: 'Shortcut', icon: <span className="text-purple-600 font-bold">📋</span> },
  
  // Tools & Platforms
  { name: 'Google Workspace', icon: <SiGoogle className="text-blue-500" /> },
  { name: 'Cursor', icon: <span className="text-blue-600 font-bold">✏️</span> },
  { name: 'Shopify', icon: <SiShopify className="text-green-600" /> },
  { name: 'WineDirect', icon: <span className="text-purple-600 font-bold">🍷</span> },
  { name: 'Commerce7', icon: <span className="text-blue-600 font-bold">🛍️</span> },
  { name: 'WordPress', icon: <FaWordpress className="text-blue-600" /> },
  { name: 'SFTP', icon: <span className="text-gray-600 font-bold">📤</span> },
  { name: 'Nativescript', icon: <SiNativescript className="text-green-600" /> },
  { name: 'CrowdIn', icon: <SiCrowdin className="text-blue-600" /> },
];

const education = [
  {
    school: 'Mindanao State University - Iligan Institute of Technology',
    degree: 'Bachelor of Science in Information Technology Major in Database Systems',
    years: '2015 - 2019',
    description: 'Got a CGPA of 1.89826. Focused on software engineering, database systems, and web development.'
  }
];

const About = () => {
  const [years, setYears] = useState(0);
  const [frontEnd, setFrontEnd] = useState(0);
  const [backEnd, setBackEnd] = useState(0);

  useEffect(() => {
    let y = 0, fe = 0, be = 0;
    const yEnd = 7, feEnd = 4, beEnd = 3;
    const interval = setInterval(() => {
      if (y < yEnd) setYears(++y);
      if (fe < feEnd) setFrontEnd(++fe);
      if (be < beEnd) setBackEnd(++be);
      if (y === yEnd && fe === feEnd && be === beEnd) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="mt-5 xl:mt-0 animate-fade-in">
      <h2 className="text-3xl font-bungee-spice mb-4">About Me</h2>
      {/* Short Intro */}
      <p className="mb-4 text-lg">
        Hi, I&apos;m <span className="font-bold text-orange-600">Kevin Fuentes</span>, a passionate Full Stack Developer with <span className="font-bold text-orange-600">{years}+</span> years of experience building scalable web applications. I specialize in <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-cyan-600">TypeScript</span>, and <span className="font-semibold text-teal-600">Tailwind CSS</span>.
      </p>
      {/* Animated Counters */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-600">{years}</div>
          <div className="text-sm text-gray-500">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600">{frontEnd}</div>
          <div className="text-sm text-gray-500">Front End</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600">{backEnd}</div>
          <div className="text-sm text-gray-500">Back End</div>
        </div>
      </div>
      {/* Skills */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-2">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span key={idx} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full font-semibold text-gray-700 shadow-sm">
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </div>
      {/* Education Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>
          Education
        </h3>
        <ol className="relative border-l-2 border-orange-200 ml-4">
          {education.map((edu, idx) => (
            <li key={idx} className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full ring-4 ring-white">
                <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z" /></svg>
              </span>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold text-lg text-gray-800">{edu.school}</div>
                  <div className="text-sm text-gray-500">{edu.degree}</div>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0">{edu.years}</div>
              </div>
              <div className="text-sm text-gray-500 mt-2">{edu.description}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default About;
