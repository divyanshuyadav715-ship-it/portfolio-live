import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const ResumeTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-[#171717] border border-[#2a2a2a] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <GraduationCap className="w-6 h-6 text-[#0d9488]" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
      </div>

      <div className="relative border-l border-[#2a2a2a] ml-6 pl-8 pb-12 mb-12">
        <div className="absolute w-4 h-4 bg-[#0d9488] rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(13,148,136,0.5)]"></div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">VIT Bhopal University</h3>
        <h4 className="text-[#0d9488] font-medium mb-4">B.Tech in Computer Science & Engineering</h4>
        <p className="text-gray-400 mb-4 tracking-tight leading-relaxed">
          Specialization in AI & Machine Learning.
        </p>
        <span className="inline-block px-4 py-1 rounded-full bg-[#171717] border border-[#2a2a2a] text-xs font-mono text-gray-500 uppercase tracking-widest">
          Class of 2027
        </span>
      </div>


      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-[#171717] border border-[#2a2a2a] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <Briefcase className="w-6 h-6 text-[#0d9488]" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Experience & Projects</h2>
      </div>

      <div className="relative border-l border-[#2a2a2a] ml-6 pl-8 pb-12">
        
        {/* Timeline Item 1 */}
        <div className="mb-12 relative">
          <div className="absolute w-4 h-4 bg-[#2a2a2a] rounded-full -left-[41px] top-1"></div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Adaptive Trading Protocol (ATP)</h3>
          <h4 className="text-[#0d9488] font-medium mb-4">Machine Learning Engineer</h4>
          <p className="text-gray-400 tracking-tight leading-relaxed">
            Architected an end-to-end MLOps trading platform using Time-Series GANs for synthetic data generation and a Reinforcement Learning (PPO) agent for algorithmic trading. Implemented real-time drift detection (KL-Divergence) and Explainable AI (XAI) to securely monitor production performance.
          </p>
        </div>

        {/* Timeline Item 2 */}
        <div className="mb-12 relative">
          <div className="absolute w-4 h-4 bg-[#2a2a2a] rounded-full -left-[41px] top-1"></div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">InferX - Scalable AI Serving Engine</h3>
          <h4 className="text-[#0d9488] font-medium mb-4">Systems Engineer</h4>
          <p className="text-gray-400 tracking-tight leading-relaxed">
            Engineered a high-performance, distributed deep learning inference gateway to bridge Systems Engineering and ML. Decoupled client-facing APIs from heavy GPU workers via an event-driven Redis architecture.
          </p>
        </div>

        {/* Timeline Item 3 */}
        <div className="mb-12 relative">
          <div className="absolute w-4 h-4 bg-[#2a2a2a] rounded-full -left-[41px] top-1"></div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Predictive Customer Churn Engine</h3>
          <h4 className="text-[#0d9488] font-medium mb-4">Machine Learning Engineer</h4>
          <p className="text-gray-400 tracking-tight leading-relaxed">
            Engineered an end-to-end ML pipeline analyzing 50k+ users. Bypassed standard purely-predictive models by implementing a custom Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV) routing logic. Projected to reduce wasted retention spend by 30%.
          </p>
        </div>

        {/* Timeline Item 4 */}
        <div className="mb-12 relative">
          <div className="absolute w-4 h-4 bg-[#2a2a2a] rounded-full -left-[41px] top-1"></div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">E-Commerce Funnel & Drop-Off Analysis</h3>
          <h4 className="text-[#0d9488] font-medium mb-4">Data Analyst</h4>
          <p className="text-gray-400 tracking-tight leading-relaxed">
            Simulated and analyzed 100k+ web traffic logs to identify bottlenecks. Built an interactive dashboard to visualize conversion rates across the entire user journey. Identified a critical mobile UI drop-off.
          </p>
        </div>

        {/* Timeline Item 5 */}
        <div className="relative">
          <div className="absolute w-4 h-4 bg-[#2a2a2a] rounded-full -left-[41px] top-1"></div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">MediGuide Healthcare Model</h3>
          <h4 className="text-[#0d9488] font-medium mb-4">ML Developer</h4>
          <p className="text-gray-400 tracking-tight leading-relaxed">
            Developed a classification model using Support Vector Machines (SVM) to predict disease probability based on user-inputted symptoms.
          </p>
        </div>

      </div>

    </motion.div>
  );
};

export default ResumeTab;
