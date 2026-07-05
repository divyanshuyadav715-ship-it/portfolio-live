import React from 'react';
import { motion } from 'framer-motion';

const ContactTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Get in Touch</h2>
      <p className="text-gray-400 mb-12 max-w-2xl text-lg leading-relaxed">
        I'm currently available for full-time Data & Product Analyst roles starting in 2027. Let's discuss how I can help bridge your machine learning initiatives with business ROI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-mono text-gray-500 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-[#171717] border border-[#2a2a2a] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-mono text-gray-500 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-[#171717] border border-[#2a2a2a] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-gray-500 uppercase tracking-widest">Message</label>
              <textarea 
                id="message"
                rows="5"
                className="w-full bg-[#171717] border border-[#2a2a2a] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors resize-none"
                placeholder="How can we work together?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0d9488] text-white font-bold py-4 rounded-xl hover:bg-[#0f766e] transition-colors flex items-center justify-center gap-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[400px] md:h-full min-h-[300px] bg-[#171717] rounded-3xl border border-[#2a2a2a] flex items-center justify-center flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
          <h3 className="text-xl font-bold text-gray-400 mb-2 z-10 relative group-hover:text-white transition-colors">Based in India</h3>
          <p className="text-gray-600 font-mono text-sm uppercase tracking-widest z-10 relative">Remote Available</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactTab;
