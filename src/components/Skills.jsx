import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Core",
    icon: <Target className="w-5 h-5 text-gray-500 mb-4" />,
    skills: ["Product Analytics", "A/B Testing", "Root Cause Analysis"]
  },
  {
    title: "Engineering",
    icon: <Code2 className="w-5 h-5 text-gray-500 mb-4" />,
    skills: ["Python (Pandas/NumPy)", "Advanced SQL", "C++", "Data Structures"]
  },
  {
    title: "ML & BI",
    icon: <Cpu className="w-5 h-5 text-gray-500 mb-4" />,
    skills: ["XGBoost", "SVM", "Tableau", "Streamlit"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#000]">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12 text-white tracking-tight"
        >
          Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#050505] rounded-3xl p-8 border border-[#111] hover:border-[#333] transition-all duration-300"
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
            >
              {category.icon}
              <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest border-b border-[#111] pb-4">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="text-gray-300 text-sm tracking-tight"
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
