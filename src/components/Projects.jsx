import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Predictive Customer Churn & Intervention Engine",
    tech: "Python, XGBoost, SQLite, Streamlit",
    description: "Engineered an end-to-end ML pipeline analyzing 50k+ users. Built a custom profitability matrix simulating LTV vs. CAC to target retention discounts.",
    impact: "Projected to reduce wasted retention spend by 30% and save ₹45L in annualized revenue.",
    demoLink: "https://huggingface.co/spaces/divyanshujaat/churn-intervention-engine",
    repoLink: "https://github.com/divyanshuyadav715-ship-it/predictive-churn-engine"
  },
  {
    title: "E-Commerce Conversion Funnel Analysis",
    tech: "Advanced SQL (CTEs, Window Functions), Python, BI Dashboards",
    description: "Simulated and analyzed 100k+ web sessions to identify checkout friction points.",
    impact: "Identified a critical mobile UI drop-off, recommending a UX redesign projected to recapture ₹25 Lakhs in monthly revenue.",
    demoLink: "https://ecommerce-conversion-funnel-xy4ajysrncyatj3rqyxave.streamlit.app/",
    repoLink: "https://github.com/divyanshuyadav715-ship-it/ecommerce-conversion-funnel"
  },
  {
    title: "MediGuide Predictive Healthcare",
    tech: "Support Vector Machines (SVM), Scikit-Learn",
    description: "Developed a classification model for symptom-based disease prediction.",
    impact: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-darkerbg border-t border-bordergray">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white tracking-tight"
        >
          Flagship Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cardbg rounded-xl p-8 md:p-10 border border-bordergray hover:border-gray-600 transition-all duration-300 group flex flex-col h-full shadow-sm hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300 tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
                {project.tech}
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg flex-grow">
                {project.description}
              </p>
              {project.impact && (
                <div className="bg-[#161616] p-4 rounded border-l-2 border-gray-500 mb-8 flex-grow-0">
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold text-white">Impact:</span> {project.impact}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors duration-200">
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-transparent border border-gray-700 text-gray-300 text-sm font-medium rounded hover:border-gray-400 hover:text-white transition-colors duration-200">
                    Source Code
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
