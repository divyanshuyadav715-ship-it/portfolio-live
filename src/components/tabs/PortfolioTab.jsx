import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'ML Models',
    title: 'Adaptive Trading Protocol (ATP)',
    description: 'Architected an end-to-end MLOps trading platform using Time-Series GANs for synthetic data generation and a Reinforcement Learning (PPO) agent for algorithmic trading.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'Streamlit'],
    demo: 'https://locustfilepy-6trvjqjzvgxc7caucx6xbe.streamlit.app/#agent-performance-live-p-l',
    github: 'https://github.com/divyanshuyadav715-ship-it/SynthMarket'
  },
  {
    id: 2,
    category: 'Applications',
    title: 'InferX - Scalable AI Serving Engine',
    description: 'Engineered a high-performance, distributed deep learning inference gateway to bridge Systems Engineering and ML. Decoupled client-facing APIs from heavy GPU workers via an event-driven Redis architecture.',
    tech: ['Java', 'Spring Boot', 'Python', 'Redis'],
    demo: '#',
    github: 'https://github.com/divyanshuyadav715-ship-it/inferx'
  },
  {
    id: 3,
    category: 'ML Models',
    title: 'Predictive Customer Churn Engine',
    description: 'Engineered an end-to-end ML pipeline analyzing 50k+ users. Implemented a custom Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV) routing logic.',
    tech: ['Python', 'XGBoost', 'Streamlit'],
    demo: 'https://huggingface.co/spaces/divyanshujaat/churn-intervention-engine',
    github: 'https://github.com/divyanshuyadav715-ship-it/predictive-churn-engine'
  },
  {
    id: 4,
    category: 'Web Analytics',
    title: 'E-Commerce Funnel & Drop-Off Analysis',
    description: 'Simulated and analyzed 100k+ web traffic logs to identify bottlenecks. Built an interactive dashboard to visualize conversion rates across the entire user journey.',
    tech: ['SQL', 'Tableau', 'Python'],
    demo: 'https://ecommerce-conversion-funnel-xy4ajysrncyatj3rqyxave.streamlit.app/',
    github: 'https://github.com/divyanshuyadav715-ship-it/ecommerce-conversion-funnel'
  },
  {
    id: 5,
    category: 'ML Models',
    title: 'MediGuide Healthcare Model',
    description: 'Developed a classification model using Support Vector Machines (SVM) to predict disease probability based on user-inputted symptoms.',
    tech: ['Scikit-Learn', 'SVM'],
    demo: '#',
    github: 'https://github.com/divyanshuyadav715-ship-it'
  },
  {
    id: 6,
    category: 'ML Models',
    title: 'AegisAttendance: AI Biometric Engine',
    description: 'An enterprise-scale facial recognition system designed for real-time attendance management, featuring liveness detection and automated analytical reporting.',
    tech: ['DeepFace', 'Supabase', 'Docker'],
    demo: '#',
    github: 'https://github.com/divyanshuyadav715-ship-it/Smart_attendance_CV'
  }
];

const PortfolioTab = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Applications', 'Web Analytics', 'ML Models'];
  
  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-wrap gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-[#0d9488] text-white shadow-[0_0_15px_rgba(13,148,136,0.3)]' 
                : 'bg-[#171717] text-gray-400 hover:text-white border border-[#2a2a2a]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-[#171717] rounded-3xl p-8 border border-[#2a2a2a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#444] transition-colors flex flex-col group"
            >
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#222] text-gray-400 text-xs font-mono rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <div className="flex items-center gap-6">
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#0d9488] hover:text-white transition-colors"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a 
                      href={project.github}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      Source Code <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {project.demo && project.demo !== '#' && (
                  <span className="text-xs text-gray-500/80 font-medium italic">
                    *Free tier apps may take 1-2 mins to wake up from sleep
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioTab;
