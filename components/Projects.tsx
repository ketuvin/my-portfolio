import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ImageModal from './ImageModal';
import { useProjectsPerPage } from '../hooks/useProjectsPerPage';
import ProjectPlaceholder from './ProjectPlaceholder';

const Projects: React.FC = () => {
  const projects = useMemo(() => [
    {
      title: 'Systemair (incl. Frico, Menerga)',
      description: 'A global leader in sustainable HVAC solutions, offering a comprehensive portfolio including air handling units, fans, air conditioning, fire safety systems, and air distribution products. The platform serves as a central hub for product selection, technical documentation, and system configuration tools.',
      technologies: 'Tech Stack: NextJS, ReactJS, Tailwind CSS, Storyblok, Zustand, SASS, Redis, ElasticSearch, Algolia, MongoDB, CrowdIn, Google Workspace, Cursor',
      imageUrls: ['/images/systemair-1.png', '/images/systemair-2.png', '/images/systemair-3.png', '/images/systemair-4.png'],
      projectLink: 'https://www.systemair.com/',
      proprietary: true
    },
    {
      title: 'Kaddy Marketplace',
      description: 'A beverage discovery and ordering platform with integrated payment solutions.',
      technologies: 'Tech Stack: Chakra UI, Styled Components, Zustand, Heroku, Vercel, Sentry, Honeycomb, Algolia, FullStory, Segment, Stripe, Zepto Payments, Golang, Apollo GraphQL, TypeScript, NextJS, PostgreSQL, Docker',
      imageUrls: ['/images/kaddy-marketplace-1.png', '/images/kaddy-marketplace-2.png'],
      projectLink: 'https://www.kaddy.com.au/',
      proprietary: true
    },
    {
      title: 'Kaddy Connect',
      description: 'An inventory and shipment management system for warehouses to track products and orders.',
      technologies: 'Tech Stack: NextJS (Redux), SASS, Laravel, MySQL, AWS (S3, EC2, Elastic Beanstalk, SQS, Amplify, Code Pipeline), CartonCloud, Xero, Auspost',
      imageUrls: ['/images/kaddy-connect-1.png', '/images/kaddy-connect-2.png'],
      projectLink: 'https://www.kaddy.com.au/',
      proprietary: true
    },
    {
      title: 'DHSUD Housing Loan App',
      description: 'A government platform for housing loan applications, house reservations, and payment scheduling.',
      technologies: 'Tech Stack: NextJS PWA, Typescript, Tailwind, Zustand, Vercel, Django, AWS, GCash, Stripe',
      imageUrls: ['/images/dhsud-1.png', '/images/dhsud-2.png', '/images/dhsud-3.png'],
      projectLink: 'https://www.finnoven.ph/',
      proprietary: true
    },
    {
      title: 'ICAO SMS TOOL',
      description: 'An accident reporting system for the aviation industry.',
      technologies: 'Tech Stack: ReactJS (Redux), Tailwind CSS, Laravel, MySQL, Swagger',
      imageUrls: ['/images/icao.png'],
      projectLink: 'https://www.infina.net/',
      proprietary: true
    },
    {
      title: 'MedCenter',
      description: 'A comprehensive Hospital Information System (HIS) for small hospitals with modules for patient management, physician orders, and lab results.',
      technologies: 'Tech Stack: Yii2, Core PHP, JQuery, Nativescript-Angular + Firebase, ReactJS (Redux), Bootstrap, PostgreSQL, Robot Framework',
      imageUrls: ['/images/salusciens-1.png', '/images/salusciens-2.png'],
      projectLink: 'https://www.salusciens.com/',
      proprietary: true
    },
    {
      title: 'MedBook',
      description: 'A personal healthcare network providing access to medical records, prescriptions, and doctor communications.',
      technologies: 'Tech Stack: Nativescript - Angular, Firebase',
      imageUrls: [],
      projectLink: 'https://www.salusciens.com/',
      proprietary: true
    },
    {
      title: 'MedLab',
      description: 'A laboratory information system for managing diagnostic testing, results, and reporting.',
      technologies: 'Tech Stack: Yii2, Bootstrap, JQuery, MySQL',
      imageUrls: [],
      projectLink: 'https://www.salusciens.com/',
      proprietary: true
    },
    {
      title: 'Farmako',
      description: 'A pharmacy inventory system for tracking medicines, managing stock, and generating reports.',
      technologies: 'Tech Stack: Yii2, Bootstrap, JQuery, PostgreSQL',
      imageUrls: ['/images/farmako.png'],
      projectLink: 'https://github.com/ketuvin/Pharmacy-Inventory-System',
      proprietary: false
    },
    {
      title: 'DiaPlan',
      description: 'An expert system for generating daily meal plans for type-2 diabetic patients.',
      technologies: 'Tech Stack: Flex Expert System, HTML, CSS',
      imageUrls: ['/images/diaplan.png'],
      projectLink: 'https://github.com/ketuvin/DiaPlan-A-Web-Expert-System-for-Generating-Daily-Menu-for-Newly-Diagnosed-Type-2-Diabetic',
      proprietary: false
    },
    {
      title: 'Basic Scientific Calculator App',
      description: 'A scientific calculator web app with dark/light mode and mathematical functions.',
      technologies: 'Tech Stack: NextJS, Typescript, Tailwind CSS, Zustand',
      imageUrls: ['/images/calculator-1.png', '/images/calculator-2.png'],
      projectLink: 'https://github.com/ketuvin/calculator-app',
      proprietary: false
    },
    {
      title: 'Linamon COVID Tracker API',
      description: 'Basic API Service for Linamon COVID tracker system: https://github.com/zeejay09/linamon-covid-tracker.',
      technologies: 'Tech Stack: Laravel, MySQL',
      imageUrls: [],
      projectLink: 'https://github.com/ketuvin/Linamon-COVID-tracker-API',
      proprietary: false
    },
    {
      title: 'RAID Simulation Applet',
      description: 'A UI simulation of RAID storage virtualization technology, demonstrating RAID levels 1-6.',
      technologies: 'Tech Stack: Java, JavaFX',
      imageUrls: ['/images/raid-gui-preview.jpg'],
      projectLink: 'https://github.com/ketuvin/RAID-SIMULATION',
      proprietary: false
    }
  ], []);

  const projectsPerPage = useProjectsPerPage();
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(-1);
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const scrollToPage = (page: number) => {
    const container = document.querySelector('.projects-scroll-container');
    const firstCard = document.querySelector('.project-card'); // Get the first card to measure its actual width

    if (container && firstCard) {
      const cardWidth = (firstCard as HTMLElement).offsetWidth;
      const gapX = 8; // Equivalent to Tailwind's gap-x-4

      let scrollAmount = 0;
      if (projectsPerPage === 1) {
        // If only one project per page, for mobile, scroll one card width plus the gap
        scrollAmount = (cardWidth + gapX) * page;
      } else {
        // For multiple projects per page, account for gaps between them
        const totalPageWidth = (cardWidth * projectsPerPage) + (gapX * (projectsPerPage - 1));
        scrollAmount = totalPageWidth * page;
      }
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setCurrentPage(page);
    }
  };

  const openImageModal = (images: string[], index: number) => {
    setSelectedProjectImages(images);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedProjectImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProjectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProjectImages.length) % selectedProjectImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openProjectLink = (projectLink: string) => {
    window.open(projectLink, '_blank');
  };

  return (
    <div id="projects" className="mt-5 xl:mt-0 animate-fade-in">
      <h2>Projects</h2>
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide projects-scroll-container">
          <div className="flex pb-2 gap-x-2 overflow-visible" style={{ scrollBehavior: 'smooth' }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card w-full p-2 md:max-w-[300px] flex-shrink-0 ${styles.project} ${index === currentProjectIndex ? styles.active : ''}`}
                onClick={() => openProjectLink(project.projectLink)}
              >
                {project.imageUrls && project.imageUrls.length > 0 ? (
                  <div className="relative overflow-hidden rounded-lg border mb-4 h-[165px]">
                    <Image
                      src={project.imageUrls[0]}
                      alt={`${project.title} - Main Image`}
                      width={350}
                      height={165}
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(project.imageUrls, 0);
                      }}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    {project.imageUrls.length > 1 && (
                      <div 
                        className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full cursor-pointer z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          openImageModal(project.imageUrls, 0);
                        }}
                      >
                        +{project.imageUrls.length - 1} more
                      </div>
                    )}
                  </div>
                ) : (
                  <ProjectPlaceholder />
                )}
                <h3 className="text-lg mb-2 text-wrap whitespace-normal">{project.title}</h3>
                {project.proprietary && (
                  <button className={styles.proprietary}>Proprietary Software &#128274;</button>
                )}
                <p className="text-md opacity-70 mb-3 text-left break-words">{project.description}</p>
                <p className="text-sm italic text-left">{project.technologies}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Left Navigation Button */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent w-14 h-full flex items-center">
          <button 
            onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 0}
          >
            &#10094;
          </button>
        </div>
        {/* Right Navigation Button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white to-transparent w-14 h-full flex items-center justify-end">
          <button 
            onClick={() => scrollToPage(Math.min(totalPages - 1, currentPage + 1))}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages - 1}
          >
            &#10095;
          </button>
        </div>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentPage === index ? 'bg-orange-600 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-center mt-4 mb-8">Note: Some proprietary projects will redirect to company website.</p>
      {selectedProjectImages.length > 0 && (
        <ImageModal
          images={selectedProjectImages}
          currentIndex={currentImageIndex}
          onClose={closeImageModal}
          onNext={nextImage}
          onPrev={prevImage}
          onSelect={selectImage}
        />
      )}
    </div>
  );
};

export default Projects;
