import { useState, useEffect } from 'react';

export const useProjectsPerPage = () => {
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1536) { // 2xl
        setProjectsPerPage(4);
      } else if (width >= 1280) { // xl
        setProjectsPerPage(3);
      } else if (width >= 1024) { // lg
        setProjectsPerPage(2);
      } else { // md and below
        setProjectsPerPage(1);
      }
    };

    // Initial call
    updateProjectsPerPage();

    // Add event listener
    window.addEventListener('resize', updateProjectsPerPage);

    // Cleanup
    return () => window.removeEventListener('resize', updateProjectsPerPage);
  }, []);

  return projectsPerPage > 1 ? projectsPerPage - 1 :  projectsPerPage;
}; 