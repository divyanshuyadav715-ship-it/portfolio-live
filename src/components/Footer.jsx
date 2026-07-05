import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-darkbg border-t border-bordergray">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Email</a>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-gray-300 text-center tracking-tight">
          Available for roles starting in 2027. <span className="text-white">Let's talk data.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
