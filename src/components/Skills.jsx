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
    <section id="skills" className="py-20 px-6 bg-darkbg">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
        >
          Skills & Architecture
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-cardbg rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-4 py-2 bg-darkerbg text-gray-300 text-sm font-medium rounded-full border border-gray-700 hover:border-neon hover:text-neon transition-colors duration-300"
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
