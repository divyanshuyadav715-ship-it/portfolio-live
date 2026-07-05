import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactTab = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [locationText, setLocationText] = useState('Detecting Location...');
  const [mapSrc, setMapSrc] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14349122.95156476!2d68.32410974026367!3d22.44976735160934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus');

  useEffect(() => {
    // Automatically detect visitor location via IP (No browser permission needed)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.latitude && data.longitude) {
          setLocationText(`Active in ${data.city}, ${data.country_name}`);
          setMapSrc(`https://www.google.com/maps?q=${data.latitude},${data.longitude}&hl=en&z=12&output=embed`);
        } else {
          setLocationText('India (Remote Active)');
        }
      })
      .catch(() => setLocationText('India (Remote Active)'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nSender Email: ${email}`);
    
    // Open default mail client
    window.location.href = `mailto:divyanshuyadav715@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-mono text-gray-500 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#171717] border border-[#2a2a2a] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-mono text-gray-500 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#171717] border border-[#2a2a2a] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-gray-500 uppercase tracking-widest">Message</label>
              <textarea 
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
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

        {/* Google Maps Embed */}
        <div className="w-full h-[400px] md:h-full min-h-[350px] bg-[#171717] rounded-3xl border border-[#2a2a2a] relative overflow-hidden group">
          <div className="absolute top-4 left-4 z-10 bg-[#121212]/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#2a2a2a]">
            <h3 className="text-sm font-bold text-white tracking-tight">Visitor Location</h3>
            <p className="text-[#0d9488] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse"></span>
              {locationText}
            </p>
          </div>
          <iframe 
            src={mapSrc} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%) grayscale(80%)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactTab;
