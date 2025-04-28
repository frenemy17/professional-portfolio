import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Experience, Skill } from '../types';

interface AboutProps {
  skills: Skill[];
  experiences: Experience[];
}

const About: React.FC<AboutProps> = ({ skills, experiences }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
    .fromTo(
      bioRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      "-=0.2"
    )
    .fromTo(
      experienceRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      "-=0.2"
    )
    .fromTo(
      skillsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      "-=0.2"
    );

    // Animate skill bars
    gsap.fromTo(
      '.skill-progress-inner',
      { width: 0 },
      { 
        width: 'var(--skill-level)',
        duration: 1.5, 
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.5 
      }
    );
    
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 px-4 bg-black text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          ref={titleRef}
          className="text-3xl font-mono font-bold text-green-400 mb-2"
        >
          <span className="text-cyan-400">&gt;</span> About Me
        </h2>
        
        <div ref={bioRef} className="mb-12">
          <p className="text-gray-300 mb-4 font-mono">
          I'm a front-end developer with a strong design intuition and a passion for creating clean, user-focused digital experiences. 
          <p>I specialize in building modern, responsive interfaces that blend functionality with aesthetic simplicity.</p>
          <p>Beyond the screen, I find inspiration in traveling, exploring new cultures, and painting — experiences that fuel my creativity and fresh perspective on design.</p>


          </p>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div ref={experienceRef}>
            <h3 className="text-xl font-mono font-semibold text-cyan-400 mb-6 border-b border-gray-800 pb-2">
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-gray-800">
                  <div className="absolute w-3 h-3 bg-green-400 rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-mono font-medium text-green-400">{exp.title}</h4>
                  <p className="text-cyan-400 font-mono text-sm">{exp.company}</p>
                  <p className="text-gray-400 font-mono text-xs mb-2">{exp.period}</p>
                  <p className="text-gray-300 font-mono text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Section */}
          <div ref={skillsRef}>
            <h3 className="text-xl font-mono font-semibold text-cyan-400 mb-6 border-b border-gray-800 pb-2">
              Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-sm text-gray-300">{skill.name}</span>
                    <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-sm overflow-hidden">
                    <div 
                      className="skill-progress-inner h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-sm"
                      style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;