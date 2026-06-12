import { Project, ProjectCategory } from './projects';

export type ProjectFilter = 'all' | 'live' | 'proprietary' | 'open-source';

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  enterprise: 'Enterprise',
  startup: 'Startup',
  gov: 'Government',
  personal: 'Personal',
  healthcare: 'Healthcare',
};

export function filterProjects(projects: Project[], filter: ProjectFilter): Project[] {
  switch (filter) {
    case 'live':
      return projects.filter((p) => p.status === 'live' || p.status === 'mvp');
    case 'proprietary':
      return projects.filter((p) => p.proprietary);
    case 'open-source':
      return projects.filter((p) => !p.proprietary);
    default:
      return projects;
  }
}

export function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  return filterProjects([project], filter).length > 0;
}
