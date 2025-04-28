import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    // Animate filtered projects
    gsap.fromTo(
      projectRefs.current.filter(el => el !== null),
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.4, 
        ease: 'power2.out' 
      }
    );
  }, [filter, filteredProjects]);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen py-24 px-4 bg-black text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-mono font-bold text-green-400 mb-2">
          <span className="text-cyan-400">&gt;</span> Projects
        </h2>
        <p className="text-gray-400 mb-8 font-mono">A selection of my recent work</p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['all', 'web', 'mobile', 'design', 'other'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 font-mono text-sm rounded transition-colors ${
                filter === category
                  ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all hover:border-green-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4">
                  {project.projectUrl && (
                    <a 
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-mono font-semibold text-green-400">{project.title}</h3>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-gray-800 text-cyan-400">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 font-mono text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-sm text-gray-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;