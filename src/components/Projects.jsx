import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Activity, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Predictive Customer Churn & Intervention Engine",
    tech: "Python, XGBoost, SQLite, Streamlit",
    description: "Engineered an end-to-end ML pipeline analyzing 50k+ users. Built a custom profitability matrix simulating LTV vs. CAC to target retention discounts.",
    impact: "Projected to reduce wasted retention spend by 30% and save ₹45L in annualized revenue.",
    demoLink: "https://huggingface.co/spaces/divyanshujaat/churn-intervention-engine",
    repoLink: "https://github.com/divyanshuyadav715-ship-it/predictive-churn-engine",
    icon: <LineChart className="w-6 h-6 text-gray-400 mb-4" />
  },
  {
    title: "E-Commerce Conversion Funnel Analysis",
    tech: "Advanced SQL, Python, BI",
    description: "Simulated and analyzed 100k+ web sessions to identify checkout friction points.",
    impact: "Identified a critical mobile UI drop-off.",
    demoLink: "https://ecommerce-conversion-funnel-xy4ajysrncyatj3rqyxave.streamlit.app/",
    repoLink: "https://github.com/divyanshuyadav715-ship-it/ecommerce-conversion-funnel",
    icon: <Database className="w-6 h-6 text-gray-400 mb-4" />
  },
  {
    title: "MediGuide Predictive Healthcare",
    tech: "SVM, Scikit-Learn",
    description: "Developed a classification model for symptom-based disease prediction.",
    impact: "",
    icon: <Activity className="w-6 h-6 text-gray-400 mb-4" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#000]">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12 text-white tracking-tight"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#050505] rounded-3xl p-8 md:p-10 border border-[#111] hover:border-[#333] hover:bg-[#0a0a0a] transition-all duration-300 group flex flex-col h-full ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
            >
              <div className="flex flex-col flex-grow">
                {project.icon}
                <h3 className="text-xl font-semibold text-gray-100 mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-600 mb-6 uppercase tracking-widest">
                  {project.tech}
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                {project.impact && (
                  <div className="mt-auto mb-8">
                    <p className="text-gray-300 text-sm border-l border-[#333] pl-4 py-1">
                      <span className="text-gray-500 mr-2">Impact:</span>{project.impact}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-[#111]">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
