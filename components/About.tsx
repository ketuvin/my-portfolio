import { useEffect, useState } from 'react';
import { skills } from '../lib/skills';
import { education } from '../lib/education';

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
            <div
              key={idx}
              className="group relative bg-gray-100 rounded-full font-semibold text-gray-700 shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 w-[60px] h-[60px] min-w-[60px] 2xl:w-[70px] 2xl:h-[70px] 2xl:min-w-[70px]"
            >
              {/* Icon Layer */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-x-full bg-gray-100">
                <div className="text-3xl flex items-center justify-center w-full h-full">
                  {skill.icon}
                </div>
              </div>
              
              {/* Rating Layer */}
              <div className="absolute inset-0 flex flex-col items-center justify-center translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full p-2">
                <div className="text-lg 2xl:text-xl font-bold leading-tight">{skill.rating}/10</div>
                <div className="text-[8px] 2xl:text-[10px] text-center leading-tight mt-0.5 opacity-95 font-medium px-1">{skill.name}</div>
              </div>
            </div>
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
