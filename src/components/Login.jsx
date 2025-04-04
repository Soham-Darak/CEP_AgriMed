import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import agriLogo from '../assets/AgriCompare Logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    farmingType: 'rabi',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.username.trim()) {
      setError('Username is required');
      setIsSubmitting(false);
      return;
    }

    if (!/\d{10}$/.test(formData.contact)) {
      setError('Valid 10-digit contact number required');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex items-center justify-center p-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-green-300">
        
        <div className="flex flex-col items-center mb-6">
          <img src={agriLogo} alt="AgriCompare Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-2xl font-bold text-green-800">Welcome to AgriMed</h2>
          <p className="text-green-600 text-sm text-center">Compare crop diseases & find the best solutions</p>
        </div>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700">Username</label>
            <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="Enter your name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700">Contact Number</label>
            <input type="tel" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="10-digit number" maxLength="10" />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700 mb-2">Type of Farming</label>
            <div className="flex gap-4">
              {['rabi', 'kharif', 'mix'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="farmingType" value={type} checked={formData.farmingType === type} onChange={(e) => setFormData({ ...formData, farmingType: e.target.value })} className="text-green-600 focus:ring-green-500" />
                  <span className="text-green-700 capitalize">{type} Farming</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${isSubmitting ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
            {isSubmitting ? 'Processing...' : 'Submit'}
          </button>
        </form>

        <button onClick={handleSkip} className="w-full mt-4 py-3 px-4 text-green-700 bg-green-100 rounded-lg font-medium hover:bg-green-200 transition-all">
          Skip Login
        </button>
      </motion.div>
    </div>
  );
};

export default Login;