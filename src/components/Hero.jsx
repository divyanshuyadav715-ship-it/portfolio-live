import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 bg-[#000]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter"
        >
          Divyanshu Yadav.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-10 text-gray-500 tracking-tight"
        >
          Data & Product Analyst
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed tracking-tight"
        >
          I build predictive engines and analytics pipelines.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a 
            href="https://divyanshujaat.github.io/predictive-churn-engine/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Live Dashboard ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
