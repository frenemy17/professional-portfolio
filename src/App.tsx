import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavItem } from './types';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { experiences } from './data/experiences';
import { gsap } from 'gsap';

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  
  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];
  
  const handleNavigate = (path: string) => {
    // Animate out current section
    gsap.to('#content-section > *', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentPath(path);
        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };
  
  useEffect(() => {
    // Update page title based on current path
    const currentNavItem = navItems.find(item => item.path === currentPath);
    if (currentNavItem) {
      document.title = `${currentNavItem.label} | Developer Portfolio`;
    } else {
      document.title = 'Developer Portfolio';
    }
  }, [currentPath, navItems]);

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <Hero onNavigate={handleNavigate} />;
      case '/about':
        return <About skills={skills} experiences={experiences} />;
      case '/projects':
        return <Projects projects={projects} />;
      case '/contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation 
          items={navItems} 
          currentPath={currentPath} 
          onNavigate={handleNavigate} 
        />
        
        <main id="content-section">
          {renderContent()}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;