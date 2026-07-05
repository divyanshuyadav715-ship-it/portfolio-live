import React from 'react';
import { motion } from 'framer-motion';
import Scene from './Scene';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 bg-[#000] overflow-hidden">
      <Scene />
      <div className="relative z-10 max-w-4xl mx-auto text-center pointer-events-none">
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
          className="text-xl md:text-2xl font-medium mb-8 text-gray-500 tracking-tight"
        >
          Data & Product Analyst
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-14 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed tracking-tight mb-4">
            I engineer high-performance ML pipelines, architect scalable data models, and tackle complex algorithms.
          </p>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed tracking-tight">
            Bridging the gap between raw data and business ROI with clean, production-ready code. Always iterating, always optimizing.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
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
            className="px-6 py-3 bg-[#0a0a0a] border border-[#333] text-white text-sm font-medium rounded-full hover:bg-[#111] transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Live Dashboard ↗
          </a>
          <a 
            href="https://leetcode.com/u/divyanshu_1918/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent text-gray-400 hover:text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            LeetCode ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
