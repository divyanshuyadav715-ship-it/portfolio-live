import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    date: 'Oct 2026',
    title: 'Optimizing XGBoost for High-Dimensional Sparse Datasets',
    readTime: '6 min read'
  },
  {
    date: 'Sep 2026',
    title: 'The Hidden Cost of Customer Acquisition (CAC)',
    readTime: '4 min read'
  },
  {
    date: 'Aug 2026',
    title: 'Building Real-Time Dashboards with Streamlit and SQLite',
    readTime: '8 min read'
  }
];

const BlogTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Writing & Thoughts</h2>
      
      <div className="flex flex-col gap-6">
        {articles.map((article, index) => (
          <div 
            key={index}
            className="group block p-6 border-b border-[#2a2a2a] hover:bg-[#171717] rounded-2xl transition-colors cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
              <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{article.date}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-[#0d9488] transition-colors tracking-tight">
                {article.title}
              </h3>
            </div>
            <span className="text-sm text-gray-500">{article.readTime}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogTab;
