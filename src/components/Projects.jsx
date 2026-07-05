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
    <section id="projects" className="py-20 px-6 bg-darkerbg">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
        >
          The Flagship Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-cardbg rounded-2xl p-8 md:p-10 border border-gray-800 hover:border-neon transition-all duration-300 group flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-gray-500 mb-6">
                Tech: {project.tech}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg flex-grow">
                {project.description}
              </p>
              {project.impact && (
                <div className="bg-neon/10 p-4 rounded-lg border-l-4 border-neon mb-6 flex-grow-0">
                  <p className="text-neon font-medium">
                    <span className="font-bold">Business Impact:</span> {project.impact}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-neon text-darkbg font-bold rounded hover:bg-white transition-colors duration-300">
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-gray-600 text-gray-300 rounded hover:border-white hover:text-white transition-colors duration-300">
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
