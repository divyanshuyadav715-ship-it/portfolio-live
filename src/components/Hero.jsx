import React from 'react';
import { motion } from 'framer-motion';
import ParticleScene from './ParticleScene';
import ProfitCube from './ProfitCube';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 bg-[#000] overflow-hidden">
      <ParticleScene />
      <ProfitCube />
      <div className="relative z-10 max-w-4xl mx-auto text-center pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter"
          style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
        >
          Divyanshu Yadav
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-10 text-gray-400 tracking-tight"
        >
          Data & Product Analyst | Bridging Machine Learning with Business ROI
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed tracking-tight"
        >
          I build predictive engines and analytics pipelines that don't just output data—they drive strategic decisions and protect the bottom line.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <a 
            href="#projects" 
            className="px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            View Flagship Projects
          </a>
          <a 
            href="https://divyanshujaat.github.io/predictive-churn-engine/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-transparent border border-[#333] text-white text-sm font-semibold rounded-full hover:bg-[#111] transition-colors duration-300 w-full sm:w-auto"
          >
            Live Streamlit Dashboard ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
