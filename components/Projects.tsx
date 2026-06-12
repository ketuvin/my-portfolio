import React, { useState } from 'react';
import ImageModal from './ImageModal';
import ProjectsLandscapeScroll from './ProjectsLandscapeScroll';
import { ProjectStatus } from '../lib/projects';

const Projects: React.FC = () => {
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openImageModal = (images: string[], index: number) => {
    setSelectedProjectImages(images);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedProjectImages([]);
    setCurrentImageIndex(0);
  };

  const openProjectLink = (projectLink: string, status: ProjectStatus) => {
    if (status === 'live' || status === 'mvp') {
      window.open(projectLink, '_blank');
    }
  };

  return (
    <div id="projects" className="animate-fade-in flex flex-col h-full min-h-0 mt-5 xl:mt-0">
      <h2 className="shrink-0">Projects</h2>

      <div className="flex flex-col flex-1 min-h-0 md:min-h-[70vh] xl:min-h-0">
        <ProjectsLandscapeScroll
          onOpenImageModal={openImageModal}
          onOpenProjectLink={openProjectLink}
        />
        <p className="text-center mt-3 mb-4 shrink-0 text-sm text-gray-600">
          Note: Some proprietary projects will redirect to company website.
        </p>
      </div>

      {selectedProjectImages.length > 0 && (
        <ImageModal
          images={selectedProjectImages}
          currentIndex={currentImageIndex}
          onClose={closeImageModal}
          onNext={() =>
            setCurrentImageIndex((prev) => (prev + 1) % selectedProjectImages.length)
          }
          onPrev={() =>
            setCurrentImageIndex(
              (prev) => (prev - 1 + selectedProjectImages.length) % selectedProjectImages.length
            )
          }
          onSelect={setCurrentImageIndex}
        />
      )}
    </div>
  );
};

export default Projects;
