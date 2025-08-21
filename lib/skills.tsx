import type { ReactNode } from 'react';

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaWordpress, FaBootstrap, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiStoryblok, SiChakraui, SiApollographql, SiGo, SiPhp, SiYii, SiJquery, SiRedux, SiVercel, SiHeroku, SiFirebase, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiAlgolia, SiSentry, SiSwagger, SiBitbucket, SiGithub, SiJira, SiTrello, SiGoogle, SiShopify, SiNativescript, SiCrowdin } from 'react-icons/si';

type Skill = { name: string; icon: ReactNode };

export const skills: Skill[] = [
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