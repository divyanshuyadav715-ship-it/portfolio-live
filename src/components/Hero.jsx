import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Divyanshu Yadav
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-medium mb-8 text-neon"
        >
          Data & Product Analyst | Bridging Machine Learning with Business ROI
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build predictive engines and analytics pipelines that don't just output data—they drive strategic decisions and protect the bottom line.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-neon text-darkbg font-semibold rounded-full hover:bg-white hover:text-darkbg transition-colors duration-300 w-full sm:w-auto"
          >
            View Flagship Projects
          </a>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-neon text-neon font-semibold rounded-full hover:bg-neon hover:text-darkbg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Live Streamlit Dashboard ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
