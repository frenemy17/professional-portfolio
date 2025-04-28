import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 bg-black text-gray-400 border-t border-gray-800">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center">
        <p className="font-mono text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} | Made with <Heart size={14} className="inline text-green-400" /> using React, Three.js, and GSAP
        </p>
        
        <div className="flex space-x-6">
          <a href="#" className="font-mono text-sm hover:text-cyan-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="font-mono text-sm hover:text-cyan-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="font-mono text-sm hover:text-cyan-400 transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;