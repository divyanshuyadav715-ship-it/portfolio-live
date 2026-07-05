import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-darkbg border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">Email</a>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-white text-center tracking-tight">
          Available for roles starting in 2027. <span className="text-neon">Let's talk data.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
