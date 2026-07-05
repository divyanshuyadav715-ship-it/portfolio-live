import React, { useState } from 'react';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('divyanshuyadav715@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-12 px-6 bg-[#000] border-t border-[#111]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex space-x-8 mb-8 text-sm uppercase tracking-widest font-mono">
          <a href="https://github.com/divyanshuyadav715-ship-it" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/divyanshu-yadav-2911a52b2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">LinkedIn</a>
          <button onClick={handleCopy} className="text-gray-500 hover:text-white transition-colors duration-200 focus:outline-none uppercase tracking-widest">
            {copied ? 'Copied ✓' : 'Email'}
          </button>
        </div>
        <p className="text-sm font-medium text-gray-500 text-center tracking-tight">
          Available for roles starting in 2027. <span className="text-gray-300">Let's build.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
