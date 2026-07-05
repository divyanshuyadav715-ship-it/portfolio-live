import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
        >
          Divyanshu Yadav
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-8 text-gray-400 tracking-wide"
        >
          Data & Product Analyst | Bridging ML with Business ROI
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build predictive engines and analytics pipelines that don't just output data—they drive strategic decisions and protect the bottom line.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors duration-200 w-full sm:w-auto shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            View Flagship Projects
          </a>
          <a 
            href="https://divyanshujaat.github.io/predictive-churn-engine/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#111] border border-bordergray text-gray-300 font-medium rounded hover:border-gray-500 hover:text-white transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Live Streamlit Dashboard ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
