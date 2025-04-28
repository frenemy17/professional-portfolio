import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavigationProps {
  items: NavItem[];
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ items, currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.nav-menu',
        { x: '-100%' },
        { x: '0%', duration: 0.3, ease: 'power3.out' }
      );
    } else {
      gsap.to('.nav-menu', { x: '-100%', duration: 0.3, ease: 'power3.in' });
    }
  }, [isOpen]);

  const handleItemClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div 
          className="text-emerald-500 font-mono text-lg cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          <span className="text-cyan-400">&gt;</span> dev<span className="text-cyan-400">_</span>portfolio
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-green-400 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          {items.map((item) => (
            <button
              key={item.path}
              className={`font-mono text-sm ${
                currentPath === item.path
                  ? 'text-cyan-400'
                  : 'text-emerald-500 hover:text-cyan-400'
              } transition-colors`}
              onClick={() => handleItemClick(item.path)}
            >
              {currentPath === item.path ? `[ ${item.label} ]` : item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={`nav-menu fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 shadow-lg transform -translate-x-full md:hidden p-6 z-50`}
      >
        <div className="flex flex-col space-y-4 pt-12">
          {items.map((item) => (
            <button
              key={item.path}
              className={`font-mono text-sm text-left ${
                currentPath === item.path
                  ? 'text-cyan-400'
                  : 'text-green-400 hover:text-cyan-400'
              } transition-colors py-2 border-b border-gray-800`}
              onClick={() => handleItemClick(item.path)}
            >
              {`> ${item.label}`}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;