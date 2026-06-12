import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import ProjectCardContent from './ProjectCardContent';
import ProjectFilters from './ProjectFilters';
import FeaturedProjects from './FeaturedProjects';
import { useIsMobile } from '../hooks/useIsMobile';
import { ProjectStatus, projects as allProjects } from '../lib/projects';
import { ProjectFilter, filterProjects } from '../lib/projectHelpers';

type ProjectsLandscapeScrollProps = {
  onOpenImageModal: (images: string[], index: number) => void;
  onOpenProjectLink: (link: string, status: ProjectStatus) => void;
};

const ProjectsLandscapeScroll: React.FC<ProjectsLandscapeScrollProps> = ({
  onOpenImageModal,
  onOpenProjectLink,
}) => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [activeSlug, setActiveSlug] = useState<string>(allProjects[0]?.slug ?? '');
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredProjects = filterProjects(allProjects, activeFilter);

  const scrollToProject = useCallback((slug: string) => {
    const el = slideRefs.current.get(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSlug(slug);
    }
  }, []);

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    const next = filterProjects(allProjects, filter);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    if (next.length > 0) setActiveSlug(next[0].slug);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || filteredProjects.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute('data-slug');
            if (slug) setActiveSlug(slug);
          }
        });
      },
      { root: container, threshold: isMobile ? 0.4 : 0.55 }
    );

    filteredProjects.forEach((project) => {
      const el = slideRefs.current.get(project.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredProjects, isMobile]);

  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.some((p) => p.slug === activeSlug)) {
      setActiveSlug(filteredProjects[0].slug);
    }
  }, [filteredProjects, activeSlug]);

  const setSlideRef = (slug: string) => (el: HTMLDivElement | null) => {
    if (el) slideRefs.current.set(slug, el);
    else slideRefs.current.delete(slug);
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 h-full">
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        filteredCount={filteredProjects.length}
        totalCount={allProjects.length}
      />
      <FeaturedProjects
        projects={allProjects}
        activeFilter={activeFilter}
        onSelectProject={scrollToProject}
      />

      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No projects match the selected filter.</p>
      ) : (
        <div className="flex flex-1 min-h-0 gap-3">
          <div
            ref={scrollRef}
            className={`flex-1 min-h-0 overflow-y-auto scrollbar-hide ${
              isMobile ? styles.projectsScrollPanelMobile : styles.projectsScrollPanel
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                ref={setSlideRef(project.slug)}
                data-slug={project.slug}
                className={`${isMobile ? styles.projectSlideMobile : styles.projectSlide} ${styles.project} p-4 mb-4 last:mb-0 flex flex-col min-h-0`}
              >
                <ProjectCardContent
                  project={project}
                  compact={isMobile}
                  reverseImage={!isMobile && index % 2 === 1}
                  onOpenImageModal={onOpenImageModal}
                  onOpenProjectLink={onOpenProjectLink}
                />
              </div>
            ))}
          </div>

          {!isMobile && (
            <nav
              className="hidden lg:flex flex-col gap-1 w-36 shrink-0 overflow-y-auto scrollbar-hide py-1"
              aria-label="Project navigation"
            >
              {filteredProjects.map((project) => (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => scrollToProject(project.slug)}
                  className={`text-left text-xs px-2 py-1.5 rounded transition-colors truncate ${
                    activeSlug === project.slug
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  title={project.title}
                >
                  {project.title}
                </button>
              ))}
            </nav>
          )}
        </div>
      )}

      {filteredProjects.length > 0 && (
        <div className="flex justify-center gap-1.5 mt-3 shrink-0 lg:hidden">
          {filteredProjects.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => scrollToProject(project.slug)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeSlug === project.slug ? 'bg-orange-600 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsLandscapeScroll;
