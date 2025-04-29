import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'eduConnect',
    description: 'A app that help you connect with like minded peers for studying',
    technologies: ['React', 'Agora SDK', 'Firebase', 'Websocket'],
    imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?cs=srgb&dl=pexels-buro-millennial-636760-1438072.jpg&fm=jpg&_gl=1*mbu1b6*_ga*MTQ1OTg1Mzc0Mi4xNzQ0Njk2Njc3*_ga_8JE65Q40S6*MTc0NTkxOTY0MC4yLjEuMTc0NTkxOTY2Ni4wLjAuMA..',
    projectUrl: 'https://edu-connect2.netlify.app/',
    githubUrl: 'https://github.com/frenemy17/eduConnect.git',
    category: 'web'
  },
  {
    id: 2,
    title: 'Link Vault',
    description: 'An Extensiion to save current tabs and download them in CSV format',
    technologies: ['Javascript', 'Chrome tab API','Local Storage'],
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    projectUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/frenemy17/link-vault.git',
    category: 'web'
  },
  
];