import React from 'react';
import { Project } from '../lib/projects';
import { ProjectFilter, matchesFilter } from '../lib/projectHelpers';

type FeaturedProjectsProps = {
  projects: Project[];
  activeFilter: ProjectFilter;
  onSelectProject: (slug: string) => void;
};

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  activeFilter,
  onSelectProject,
}) => {
  const featured = projects.filter((p) => p.featured && matchesFilter(p, activeFilter));

  if (featured.length === 0) return null;

  return (
    <div className="mb-4 shrink-0">
      <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Highlights</h3>
      <div className="flex flex-wrap gap-2">
        {featured.map((project) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => onSelectProject(project.slug)}
            className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:border-orange-600 hover:text-orange-600 transition-colors text-left max-w-[200px] truncate"
            title={project.title}
          >
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
