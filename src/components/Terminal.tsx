import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TerminalProps {
  initialText?: string;
  commands?: Record<string, () => void>;
  prompt?: string;
}

const Terminal: React.FC<TerminalProps> = ({ 
  initialText = 'Welcome to my portfolio. Type "help" to see commands.', 
  commands = {},
  prompt = '> '
}) => {
  const [history, setHistory] = useState<string[]>([initialText]);
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    // Focus input when terminal is clicked
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleClick);
    }

    // Scroll to bottom when history changes
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }

    // Text typing animation for initial message
    gsap.fromTo(
      ".terminal-line:first-child",
      { opacity: 0, height: 0 },
      { opacity: 1, height: "auto", duration: 0.3, ease: "power1.out" }
    );

    return () => {
      clearInterval(cursorInterval);
      if (terminal) {
        terminal.removeEventListener('click', handleClick);
      }
    };
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedInput = input.trim();
    
    if (trimmedInput) {
      // Add input to history
      const newHistory = [...history, `${prompt}${trimmedInput}`];
      
      // Process command
      if (trimmedInput === 'clear') {
        setHistory([initialText]);
      } else if (trimmedInput === 'help') {
        newHistory.push(
          'Available commands:',
          '- help: Show available commands',
          '- clear: Clear terminal',
          '- about: Show about me',
          '- projects: List projects',
          '- skills: Show skills',
          '- contact: Contact information',
          '- exit: Quit terminal (return to standard view)'
        );
        setHistory(newHistory);
      } else if (commands[trimmedInput]) {
        commands[trimmedInput]();
        setHistory(newHistory);
      } else {
        newHistory.push(`Command not found: ${trimmedInput}. Type "help" for available commands.`);
        setHistory(newHistory);
      }
    }
    
    setInput('');
    
    // Animate the new line
    setTimeout(() => {
      const newLines = document.querySelectorAll('.terminal-line:last-child');
      gsap.fromTo(
        newLines,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.05, ease: "power1.out" }
      );
      
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  };

  return (
    <div 
      ref={terminalRef}
      className="terminal w-full h-full bg-black text-emerald-500 p-4 font-mono text-sm overflow-y-auto rounded-md"
    >
      <div className="terminal-content">
        {history.map((line, index) => (
          <div key={index} className="terminal-line mb-1">
            {line}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="terminal-input-line flex">
          <span className="terminal-prompt mr-1">{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="terminal-input flex-1 bg-transparent outline-none border-none text-green-400 font-mono"
            autoFocus
          />
          <span className={`terminal-cursor ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▎</span>
        </form>
      </div>
    </div>
  );
};

export default Terminal;