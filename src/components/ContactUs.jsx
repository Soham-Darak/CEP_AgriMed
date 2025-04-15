import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const { name, contact, message } = formData;
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setStatus('Please fill all fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://sheetdb.io/api/v1/oj009bqp2kvp5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              'Contact Number': contact,
              Message: message,
            },
          ],
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', contact: '', message: '' });
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-bl from-green-50 to-green-100 flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left - Info Section */}
        <div className="bg-green-600 text-white p-8 sm:p-10 flex flex-col justify-center gap-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <p className="text-base sm:text-lg opacity-90">
            We'd love to hear from you! Feedback, questions, or ideas — we're all ears.
          </p>

          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Call Us</h3>
                <p className="text-sm sm:text-base">+91 83295 54046</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold">WhatsApp</h3>
                <p className="text-sm sm:text-base">+91 83295 54046</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Location</h3>
                <p className="text-sm sm:text-base">AgriMed, Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form Section */}
        <div className="p-6 sm:p-10 bg-white">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800">Contact Form</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="+91 83295 54046"
                className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
              />
            </div>

            {status && (
              <div
                className={`text-sm p-3 rounded-lg text-center font-medium transition-all ${
                  status.includes('successfully')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </div>
            )}

            <motion.button
              type="submit"
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white shadow-lg transition ${
                isSubmitting
                  ? 'bg-green-300 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
              disabled={isSubmitting}
              whileHover={!isSubmitting && { scale: 1.02 }}
              whileTap={!isSubmitting && { scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
