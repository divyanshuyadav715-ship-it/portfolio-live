import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#000]">
      <div className="max-w-4xl mx-auto text-center border-y border-[#1a1a1a] py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-white tracking-tighter mb-4"
        >
          The Foundation.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-4xl text-gray-200 font-bold mb-4 tracking-tighter">
            B.Tech in Computer Science & Engineering
          </h3>
          <p className="text-xl text-gray-500 mb-8 font-medium tracking-tight">
            Specialization in AI & Machine Learning
          </p>
          <div className="inline-flex items-center gap-4 border border-[#333] px-6 py-2 rounded-full">
            <span className="text-gray-300 text-sm tracking-widest uppercase font-medium">VIT Bhopal University</span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="text-gray-400 text-sm font-mono">Class of 2027</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
