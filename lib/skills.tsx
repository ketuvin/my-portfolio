import type { ReactNode } from 'react';

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaWordpress, FaBootstrap, FaSass, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiStoryblok, SiChakraui, SiApollographql, SiGo, SiPhp, SiYii, SiJquery, SiRedux, SiVercel, SiHeroku, SiFirebase, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiAlgolia, SiSentry, SiSwagger, SiBitbucket, SiGithub, SiJira, SiTrello, SiGoogle, SiShopify, SiNativescript, SiCrowdin, SiNotion, SiFilezilla, SiPayloadcms, SiSupabase, SiRobotframework, SiPrisma } from 'react-icons/si';

type Skill = { name: string; icon: ReactNode; rating: number };

export const skills: Skill[] = [
  // Frontend
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, rating: 9 },
  { name: 'React.js', icon: <FaReact className="text-blue-500" />, rating: 9 },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" />, rating: 8 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, rating: 9 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, rating: 9 },
  { name: 'SASS', icon: <FaSass className="text-pink-500" />, rating: 8 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, rating: 9 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, rating: 9 },
  { name: 'Chakra UI', icon: <SiChakraui className="text-teal-500" />, rating: 7 },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" />, rating: 8 },
  
  // State Management & API
  { name: 'Zustand', icon: <span className="text-orange-500 font-bold">🐻</span>, rating: 8 },
  { name: 'Redux', icon: <SiRedux className="text-purple-700" />, rating: 7 },
  { name: 'Apollo GraphQL', icon: <SiApollographql className="text-pink-600" />, rating: 7 },
  { name: 'Storyblok', icon: <SiStoryblok className="text-black" />, rating: 6 },
  { name: 'Payload CMS', icon: <SiPayloadcms className="text-blue-400" />, rating: 8 },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, rating: 5 },
  { name: 'Golang', icon: <SiGo className="text-blue-500" />, rating: 4 },
  { name: 'Laravel', icon: <SiLaravel className="text-red-500" />, rating: 8 },
  { name: 'PHP', icon: <SiPhp className="text-indigo-500" />, rating: 8 },
  { name: 'Yii/Yii2', icon: <SiYii className="text-green-700" />, rating: 8 },
  { name: 'jQuery', icon: <SiJquery className="text-blue-700" />, rating: 7 },
  
  // Cloud & DevOps
  { name: 'Docker', icon: <FaDocker className="text-blue-600" />, rating: 7 },
  { name: 'AWS', icon: <FaAws className="text-orange-500" />, rating: 6 },
  { name: 'Vercel', icon: <SiVercel className="text-black" />, rating: 8 },
  { name: 'Heroku', icon: <SiHeroku className="text-purple-500" />, rating: 6 },
  { name: 'Firebase', icon: <SiFirebase className="text-orange-500" />, rating: 7 },
  
  // Databases
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, rating: 8 },
  { name: 'MySQL', icon: <SiMysql className="text-blue-800" />, rating: 8 },
  { name: 'SQL Server', icon: <span className="text-red-600 font-bold">🗄️</span>, rating: 5 },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, rating: 7 },
  { name: 'Supabase', icon: <SiSupabase className="text-emerald-400" />, rating: 6 },
  { name: 'Prisma', icon: <SiPrisma className="text-black" />, rating: 6 },
  { name: 'Redis', icon: <SiRedis className="text-red-600" />, rating: 6 },
  { name: 'ElasticSearch', icon: <SiElasticsearch className="text-green-700" />, rating: 5 },
  { name: 'Algolia', icon: <SiAlgolia className="text-blue-600" />, rating: 5 },
  
  // Testing & Monitoring
  { name: 'Playwright', icon: <span className="text-green-600 font-bold">🎭</span>, rating: 6 },
  { name: 'Robot Framework', icon: <SiRobotframework className="text-blue-600" />, rating: 6 },
  { name: 'PHPUnit', icon: <FaPhp className="text-blue-600" />, rating: 6 },
  { name: 'Sentry', icon: <SiSentry className="text-orange-600" />, rating: 7 },
  { name: 'Honeycomb', icon: <span className="text-orange-500 font-bold">🍯</span>, rating: 7 },
  { name: 'Swagger', icon: <SiSwagger className="text-green-600" />, rating: 8 },
  
  // Version Control & Project Management
  { name: 'Git', icon: <FaGitAlt className="text-orange-700" />, rating: 9 },
  { name: 'Bitbucket', icon: <SiBitbucket className="text-blue-600" />, rating: 9 },
  { name: 'GitHub', icon: <SiGithub className="text-black" />, rating: 9 },
  { name: 'Jira', icon: <SiJira className="text-blue-600" />, rating: 8 },
  { name: 'Trello', icon: <SiTrello className="text-blue-500" />, rating: 8 },
  { name: 'Shortcut', icon: <span className="text-purple-600 font-bold">📋</span>, rating: 7 },
  { name: 'Notion', icon: <SiNotion className="text-black" />, rating: 7 },
  
  // Tools & Platforms
  { name: 'Google Workspace', icon: <SiGoogle className="text-blue-500" />, rating: 8 },
  { name: 'Cursor', icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 24 24">
<path d="M21.49,6.128L12.493,1.07c-0.305-0.171-0.676-0.171-0.98,0L2.51,6.128C2.195,6.305,2,6.639,2,7v10	c0,0.363,0.197,0.698,0.514,0.874l9,5C11.666,22.958,11.833,23,12,23s0.334-0.042,0.486-0.126l9-5C21.803,17.698,22,17.363,22,17V7	C22,6.639,21.805,6.305,21.49,6.128z M20.434,7.248l-8,14C12.344,21.407,12.176,21.5,12,21.5c-0.042,0-0.085-0.005-0.128-0.017	C11.652,21.425,11.5,21.227,11.5,21v-9.691L3.776,7.447C3.569,7.344,3.46,7.111,3.513,6.885S3.768,6.5,4,6.5h16	c0.178,0,0.343,0.095,0.433,0.249C20.522,6.903,20.522,7.093,20.434,7.248z"></path>
</svg>, rating: 8 },
  { name: 'Shopify', icon: <SiShopify className="text-green-600" />, rating: 6 },
  { name: 'WineDirect', icon: <span className="text-purple-600 font-bold">🍷</span>, rating: 6 },
  { name: 'Commerce7', icon: <span className="text-blue-600 font-bold">🛍️</span>, rating: 6 },
  { name: 'WordPress', icon: <FaWordpress className="text-blue-600" />, rating: 6 },
  { name: 'SFTP', icon: <span className="text-gray-600 font-bold">📤</span>, rating: 8 },
  { name: 'Nativescript', icon: <SiNativescript className="text-green-600" />, rating: 7 },
  { name: 'CrowdIn', icon: <SiCrowdin className="text-blue-600" />, rating: 7 },
  { name: 'FileZilla', icon: <SiFilezilla className="text-red-700" />, rating: 7 },
];