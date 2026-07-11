import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[320px] lg:h-screen lg:fixed lg:top-0 lg:left-0 bg-[#171717] border-b lg:border-b-0 lg:border-r border-[#2a2a2a] flex flex-col p-8 md:p-12 z-50 shadow-2xl relative">
      
      {/* Profile Section */}
      <div className="flex flex-col items-center lg:items-start mb-10">
        <div className="w-32 h-32 rounded-3xl mb-6 border-2 border-[#2a2a2a] overflow-hidden shadow-2xl group relative bg-[#121212]">
          <img 
            src="/profile.jpg" 
            alt="Divyanshu Yadav" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#0d9488]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2 text-center lg:text-left">
          Divyanshu Yadav
        </h1>
        <div className="bg-[#2a2a2a] text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
          Machine Learning Engineer
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-5 mt-auto">
        
        <div className="flex items-center gap-4 text-gray-400 group">
          <div className="w-10 h-10 rounded-xl bg-[#222] flex items-center justify-center border border-[#333] group-hover:border-[#0d9488] transition-colors">
            <Mail className="w-4 h-4 text-gray-300 group-hover:text-[#0d9488]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Email</span>
            <a href="mailto:divyanshuyadav715@gmail.com" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              divyanshuyadav715@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-400 group">
          <div className="w-10 h-10 rounded-xl bg-[#222] flex items-center justify-center border border-[#333] group-hover:border-[#0d9488] transition-colors">
            <MapPin className="w-4 h-4 text-gray-300 group-hover:text-[#0d9488]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Location</span>
            <span className="text-sm font-medium text-gray-300">India</span>
          </div>
        </div>

      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center lg:justify-start gap-4 mt-10 pt-8 border-t border-[#2a2a2a]">
        <a href="https://github.com/divyanshuyadav715-ship-it" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/divyanshu-yadav-2911a52b2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

    </aside>
  );
};

export default Sidebar;
