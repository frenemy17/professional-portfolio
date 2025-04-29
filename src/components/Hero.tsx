import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Terminal from './Terminal';

gsap.registerPlugin(TextPlugin);

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1.5, 
        ease: 'none',
        onComplete: () => {
          // Type text effect
          gsap.to(subtitleRef.current, {
            duration: 3,
            text: {
              value: "Front End developer & UI/UX designer creating minimal, functional digital experiences.",
              delimiter: ""
            },
            ease: "none"
          });
        }
      }
    )
    .fromTo(
      terminalRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      "-=0.4"
    );

  }, []);

  const terminalCommands = {
    'about': () => onNavigate('/about'),
    'projects': () => onNavigate('/projects'),
    'skills': () => onNavigate('/skills'),
    'contact': () => onNavigate('/contact'),
    'exit': () => {},
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 bg-black text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-mono mb-6"
        >
          <span className="text-emerald-500">Hello, I'm </span>
          <span className="text-cyan-400">Siddhanth Raikar</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl font-mono text-gray-300 mb-12 h-16"
        >
          Loading...
        </p>
        
        <div 
          ref={terminalRef}
          className="w-full max-w-2xl mx-auto h-64 rounded-md overflow-hidden shadow-lg border border-gray-700"
        >
          <Terminal 
            initialText="Welcome to my portfolio. Type 'help' to see available commands."
            commands={terminalCommands}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;