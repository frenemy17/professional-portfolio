import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    projectUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/yourusername/project1',
    category: 'web'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A minimal task management application with real-time updates',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    projectUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/yourusername/project2',
    category: 'web'
  },
  {
    id: 3,
    title: 'Travel Photography Portfolio',
    description: 'A minimalist photography portfolio showcasing travel photos',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Photography'],
    imageUrl: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg',
    projectUrl: 'https://example.com/project3',
    category: 'design'
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A mobile app that shows weather forecasts with beautiful UI',
    technologies: ['React Native', 'API Integration', 'UI/UX Design'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    projectUrl: 'https://example.com/project4',
    githubUrl: 'https://github.com/yourusername/project4',
    category: 'mobile'
  },
];