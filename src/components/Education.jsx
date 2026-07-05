import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-darkerbg border-t border-bordergray">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cardbg p-10 rounded-xl border border-bordergray hover:border-gray-600 transition-all duration-300 inline-block w-full shadow-sm hover:shadow-lg"
        >
          <div className="flex justify-center mb-6 text-3xl opacity-80">
            🎓
          </div>
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Education & Background</h2>
          <h3 className="text-xl text-gray-200 font-semibold mb-2 tracking-tight">
            B.Tech in Computer Science & Engineering
          </h3>
          <p className="text-gray-400 mb-4 font-medium">Specialization in AI & Machine Learning</p>
          <p className="text-gray-500 text-sm tracking-wider uppercase">VIT Bhopal University (Class of 2027)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
