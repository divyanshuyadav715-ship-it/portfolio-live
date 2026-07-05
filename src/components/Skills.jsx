import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core",
    skills: ["Product Analytics", "A/B Testing", "Root Cause Analysis"]
  },
  {
    title: "Engineering",
    skills: ["Python (Pandas/NumPy)", "Advanced SQL", "C++", "Data Structures & Algorithms"]
  },
  {
    title: "ML & BI",
    skills: ["XGBoost", "SVM", "Tableau", "Streamlit"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-darkbg border-t border-bordergray">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white tracking-tight"
        >
          Skills & Architecture
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cardbg rounded-xl p-8 border border-bordergray hover:border-gray-600 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-bordergray pb-4 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 bg-darkerbg text-gray-400 text-xs font-medium rounded border border-bordergray hover:border-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
