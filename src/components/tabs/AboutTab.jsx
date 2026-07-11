import React from 'react';
import { motion } from 'framer-motion';
import { Target, BrainCircuit, Database } from 'lucide-react';

const AboutTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        Bridging AI & Systems with Business ROI.
      </h2>
      
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-16 tracking-tight">
        I am a Machine Learning Engineer & Data Analyst with a focus on building scalable AI serving engines, quantitative trading protocols, and predictive analytics pipelines. I specialize in translating complex ML models into robust production systems and strategic business decisions.
      </p>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-8 tracking-tight">
        What I'm Doing
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#171717] rounded-3xl p-8 border border-[#2a2a2a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#444] transition-colors">
          <BrainCircuit className="w-8 h-8 text-[#0d9488] mb-6" />
          <h4 className="text-lg font-bold text-white mb-3 tracking-tight">Machine Learning & AI</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            Reinforcement Learning, Generative AI (GANs), and predictive algorithms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#171717] rounded-3xl p-8 border border-[#2a2a2a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#444] transition-colors">
          <Database className="w-8 h-8 text-[#0d9488] mb-6" />
          <h4 className="text-lg font-bold text-white mb-3 tracking-tight">Systems Engineering & MLOps</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            Distributed AI serving, Redis architectures, and real-time drift observability.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#171717] rounded-3xl p-8 border border-[#2a2a2a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#444] transition-colors">
          <Target className="w-8 h-8 text-[#0d9488] mb-6" />
          <h4 className="text-lg font-bold text-white mb-3 tracking-tight">Product Analytics</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            A/B testing, user behavior analysis, and feature impact evaluation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutTab;
