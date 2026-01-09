import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ImageModal from './ImageModal';
import { useProjectsPerPage } from '../hooks/useProjectsPerPage';
import ProjectPlaceholder from './ProjectPlaceholder';
import { projects, ProjectStatus } from '../lib/projects';
import { FaExternalLinkAlt, FaCircle } from "react-icons/fa";

const Projects: React.FC = () => {
  const projectsPerPage = useProjectsPerPage();
  const totalPages = Math.max(1, projects.length - projectsPerPage + 1);
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

      // Always move by exactly one card width (plus gap) per step
      const scrollAmount = (cardWidth + gapX) * page;

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

  const openProjectLink = (projectLink: string, status: ProjectStatus) => {
    // Only open link if status is 'live' or 'mvp'
    if (status === 'live' || status === 'mvp') {
      window.open(projectLink, '_blank');
    }
  };

  const getStatusConfig = (status: ProjectStatus) => {
    switch (status) {
      case 'live':
        return {
          label: 'Live',
          className: 'bg-green-500 text-white',
          icon: '●'
        };
      case 'down':
        return {
          label: 'Down',
          className: 'bg-red-500 text-white',
          icon: '●'
        };
      case 'mvp':
        return {
          label: 'MVP',
          className: 'bg-yellow-500 text-white',
          icon: '●'
        };
      case 'not-live':
        return {
          label: 'Not Live',
          className: 'bg-gray-500 text-white',
          icon: '●'
        };
      default:
        return {
          label: 'Unknown',
          className: 'bg-gray-400 text-white',
          icon: '●'
        };
    }
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
                className={`project-card w-full p-2 md:max-w-[300px] flex-shrink-0 ${styles.project} ${index === currentProjectIndex ? styles.active : ''} ${project.status !== 'live' && project.status !== 'mvp' ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => openProjectLink(project.projectLink, project.status)}
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
                    {/* Status Badge */}
                    <div className="absolute top-2 right-2 z-10">
                      <span className={`${getStatusConfig(project.status).className} px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md`}>
                        <span className="text-[8px]">{getStatusConfig(project.status).icon}</span>
                        {getStatusConfig(project.status).label}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-4 h-[165px]">
                    <ProjectPlaceholder />
                    {/* Status Badge for projects without images */}
                    <div className="absolute top-2 right-2 z-10">
                      <span className={`${getStatusConfig(project.status).className} px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md`}>
                        <span className="text-[8px]">{getStatusConfig(project.status).icon}</span>
                        {getStatusConfig(project.status).label}
                      </span>
                    </div>
                  </div>
                )}
                <h3 className="text-lg text-wrap whitespace-normal">
                  {project.title}
                  {(project.status === 'live' || project.status === 'mvp') && (
                    <button onClick={(e) => {
                      e.stopPropagation();
                      openProjectLink(project.projectLink, project.status);
                    }}>
                      <FaExternalLinkAlt className="text-base ml-1 text-blue-600 hover:text-orange-600" />
                    </button>
                  )}
                </h3>
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
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-14 h-full flex items-center">
          <button 
            onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 0}
          >
            &#10094;
          </button>
        </div>
        {/* Right Navigation Button */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-14 h-full flex items-center justify-end">
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
