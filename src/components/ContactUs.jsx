import { useState } from 'react';
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
        headers: {
          'Content-Type': 'application/json',
        },
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
      className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-10 relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-300 rounded-full opacity-10"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">Contact Us</h1>
            <p className="text-lg text-green-600">We’d love to hear from you! Reach out to us with any questions or feedback.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {status && (
                <div
                  className={`text-sm p-3 rounded-md text-center font-medium ${
                    status.includes('successfully') ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                  }`}
                >
                  {status}
                </div>
              )}

              <motion.button
                type="submit"
                className={`w-full py-4 ${
                  isSubmitting ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                } text-white rounded-xl font-semibold text-lg shadow-md transition-all`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center gap-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Primary Contact</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">WhatsApp Support</h3>
                  <p className="text-gray-600">+91 91234 56789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">AgriCompare HQ, Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
