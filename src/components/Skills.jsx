import React from 'react';
import { motion } from 'framer-motion';
import SkillCloud from './SkillCloud';
import { Target, Code2, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Product Analytics",
    icon: <Target className="w-5 h-5 text-gray-500 mb-4" />,
    skills: ["Product Strategy", "A/B Testing", "Root Cause Analysis"]
  },
  {
    title: "Engineering",
    icon: <Code2 className="w-5 h-5 text-gray-500 mb-4" />,
    skills: ["Python (Pandas/NumPy)", "Advanced SQL", "C++", "Data Structures & Algorithms"]
  },
  {
    title: "ML & BI",
    icon: <Cpu className="w-5 h-5 text-gray-500 mb-4" />,
    skills: ["XGBoost", "SVM", "Tableau", "Streamlit"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#000] border-t border-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-white tracking-tighter"
          >
            The Toolbox.
          </motion.h2>

          <div className="flex flex-col gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050505] rounded-3xl p-8 border border-[#111] hover:border-[#333] transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              >
                {category.icon}
                <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest border-b border-[#111] pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-4 py-1.5 bg-[#111] text-gray-300 text-xs font-mono tracking-widest uppercase rounded-full border border-[#222]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <SkillCloud />
        </div>
      </div>
    </section>
  );
};

export default Skills;
