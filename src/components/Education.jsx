import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#000]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-between border-t border-[#111] pt-24">
        <div className="w-full md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-white tracking-tight"
          >
            Education
          </motion.h2>
        </div>
        
        <div className="w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col group"
          >
            <h3 className="text-xl text-gray-200 font-semibold mb-2 tracking-tight group-hover:text-white transition-colors duration-200">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="text-gray-400 mb-6 font-medium">Specialization in AI & Machine Learning</p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#111] text-gray-400 text-xs tracking-widest uppercase rounded">VIT Bhopal University</span>
              <span className="text-gray-600 text-sm font-mono">Class of 2027</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
