import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { USER_DETAILS } from '../constants';
import { FiPhone, FiMail, FiSend, FiLoader } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showPhone, setShowPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    // Using Web3Forms for frontend email delivery
    // Note: The user needs to replace YOUR_ACCESS_KEY_HERE with their actual key from web3forms.com
    const accessKey = "YOUR_ACCESS_KEY_HERE";
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
      
      // Clear message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Network error. Please try again later or email me directly.' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
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
          className="ai-glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative background blur */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have a project in mind or just want to say hi? I'm always open to new opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 relative z-10">
            <button 
              onClick={() => setShowPhone(!showPhone)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hover:border-primary/50"
            >
              <FiPhone className="text-primary" />
              <span className="font-medium">
                {showPhone ? USER_DETAILS.phone : "Reveal Phone Number"}
              </span>
            </button>
            <a 
              href={`mailto:${USER_DETAILS.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hover:border-secondary/50"
            >
              <FiMail className="text-secondary" />
              <span className="font-medium">Email Me directly</span>
            </a>
          </div>
          
          <AnimatePresence>
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className={`p-4 mb-8 rounded-xl flex items-center justify-center font-medium relative z-10 border ${
                  status.type === 'success' ? 'bg-green-100/80 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-800/50 dark:text-green-400' 
                  : status.type === 'error' ? 'bg-red-100/80 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-800/50 dark:text-red-400' 
                  : 'bg-blue-100/80 border-blue-300 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-400'
                }`}
              >
                {status.type === 'loading' && <FiLoader className="animate-spin mr-2" />}
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#030712]/50 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#030712]/50 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#030712]/50 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#030712]/50 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -ml-4"></span>
              {status.type === 'loading' ? (
                <>
                  <FiLoader className="animate-spin text-xl" /> Sending...
                </>
              ) : (
                <>
                  <FiSend className="text-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
