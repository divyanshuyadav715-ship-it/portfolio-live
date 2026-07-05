import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-darkerbg">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cardbg p-10 rounded-2xl border border-gray-800 hover:border-neon/50 transition-all duration-300 inline-block w-full"
        >
          <div className="flex justify-center mb-6 text-neon text-5xl">
            🎓
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Education & Background</h2>
          <h3 className="text-xl text-gray-200 font-semibold mb-2">
            B.Tech in Computer Science & Engineering
          </h3>
          <p className="text-neon mb-4 font-medium">Specialization in AI & Machine Learning</p>
          <p className="text-gray-400 text-lg">VIT Bhopal University (Class of 2027)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
