import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { USER_DETAILS } from '../constants';
import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: USER_DETAILS.email, message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showPhone, setShowPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    try {
      // Connect to the actual backend running via serverless
      await axios.post('/api/contact', formData);
      
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: USER_DETAILS.email, message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.errors?.[0]?.msg || 'Failed to send message. Please try again later or email me directly.';
      setStatus({ type: 'error', message: errorMsg });
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have a project in mind or just want to say hi? I'm always open to new opportunities.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-10">
            <button 
              onClick={() => setShowPhone(!showPhone)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FiPhone className="text-primary" />
              <span className="font-medium">
                {showPhone ? USER_DETAILS.phone : "Reveal Phone Number"}
              </span>
            </button>
            <a 
              href={`mailto:${USER_DETAILS.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FiMail className="text-primary" />
              <span className="font-medium">Email Me directly</span>
            </a>
          </div>
          
          <AnimatePresence>
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`p-4 mb-8 rounded-xl flex items-center justify-center font-medium ${
                  status.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                  : status.type === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-darkBg/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-darkBg/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="How can I help you today?"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-darkBg/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status.type === 'loading' ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
