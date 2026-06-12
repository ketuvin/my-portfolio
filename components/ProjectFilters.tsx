import React from 'react';
import { ProjectFilter } from '../lib/projectHelpers';

type ProjectFiltersProps = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
  filteredCount: number;
  totalCount: number;
};

const FILTERS: { key: ProjectFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'live', label: 'Live' },
  { key: 'proprietary', label: 'Proprietary' },
  { key: 'open-source', label: 'Open Source' },
];

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeFilter,
  onFilterChange,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="mb-4 shrink-0">
      <div className="flex flex-wrap gap-2 items-center">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onFilterChange(key)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 ${
              activeFilter === key
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
        <span className="text-sm text-gray-500 ml-auto">
          Showing {filteredCount} of {totalCount} projects
        </span>
      </div>
    </div>
  );
};

export default ProjectFilters;
