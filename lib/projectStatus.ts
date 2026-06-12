import { ProjectStatus } from './projects';

export function getStatusConfig(status: ProjectStatus) {
  switch (status) {
    case 'live':
      return { label: 'Live', className: 'bg-green-500 text-white', icon: '●' };
    case 'down':
      return { label: 'Down', className: 'bg-red-500 text-white', icon: '●' };
    case 'mvp':
      return { label: 'MVP', className: 'bg-yellow-500 text-white', icon: '●' };
    case 'not-live':
      return { label: 'Not Live', className: 'bg-gray-500 text-white', icon: '●' };
    default:
      return { label: 'Unknown', className: 'bg-gray-400 text-white', icon: '●' };
  }
}
