import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [availableDiseases, setAvailableDiseases] = useState([]);

  const crops = [
    "Paddy", "Wheat", "Chickpea", "Tomatoes", "Chillies",
    "Sugarcane", "Sunflower", "Sorghum (Jowar)", "Pigeonpea (Tur)",
    "Soybean", "Cotton", "Rabi Crop", "Linseed", "Green gram",
    "Black gram", "Notable Crop", "Orange", "Traditional Crop",
    "Groundnut", "Moong (Green Gram)", "Urd (Black Gram)",
    "Sesamum", "Bananas", "Onions"
  ];

  const getDiseases = (crop) => {
    const diseaseMap = {
      "Paddy": ["Rice Blast", "Sheath Blight", "Bacterial Blight", "Brown Spot", "Tungro Virus"],
      "Wheat": ["Rust", "Powdery Mildew", "Karnal Bunt", "Leaf Blight", "Head Blight"],
      "Chickpea": ["Fusarium Wilt", "Ascochyta Blight", "Botrytis Gray Mold", "Root Rot", "Stunt"],
      "Tomatoes": ["Early Blight", "Late Blight", "Bacterial Spot", "Leaf Curl Virus", "Fusarium Wilt"],
      "Chillies": ["Anthracnose", "Powdery Mildew", "Bacterial Spot", "Leaf Curl", "Fruit Rot"],
      "Sugarcane": ["Red Rot", "Wilt", "Smut", "Leaf Scald", "Ratoon Stunting"],
      "Sunflower": ["Sclerotinia Rot", "Alternaria Spot", "Downy Mildew", "Rust", "Charcoal Rot"],
      "Sorghum (Jowar)": ["Anthracnose", "Downy Mildew", "Grain Mold", "Rust", "Ergot"],
      "Pigeonpea (Tur)": ["Wilt", "Sterility Mosaic", "Phytophthora Blight", "Alternaria Blight", "Stem Canker"],
      "Soybean": ["Rust", "Bacterial Blight", "Charcoal Rot", "Pod Blight", "Mosaic Virus"],
      "Cotton": ["Boll Rot", "Root Rot", "Leaf Curl", "Alternaria Blight", "Bacterial Blight"],
      "Rabi Crop": ["Leaf Rust", "Powdery Mildew", "Smut", "Ergot", "Loose Smut"],
      "Linseed": ["Powdery Mildew", "Rust", "Wilt", "Alternaria Blight", "Blight"],
      "Green gram": ["Yellow Mosaic", "Powdery Mildew", "Cercospora", "Anthracnose", "Bacterial Spot"],
      "Black gram": ["Root Rot", "Anthracnose", "Powdery Mildew", "Leaf Spot", "Mosaic"],
      "Notable Crop": ["Late Blight", "Early Blight", "Blight", "Wilt", "Rot"],
      "Orange": ["Citrus Canker", "Greening", "Melanose", "Scab", "Anthracnose"],
      "Traditional Crop": ["Rust", "Smut", "Blight", "Wilt", "Mildew"],
      "Groundnut": ["Tikka Disease", "Stem Rot", "Rust", "Leaf Spot", "Blight"],
      "Moong (Green Gram)": ["Powdery Mildew", "Cercospora", "Anthracnose", "Yellow Mosaic", "Leaf Spot"],
      "Urd (Black Gram)": ["Anthracnose", "Powdery Mildew", "Leaf Spot", "Mosaic", "Yellow Mosaic"],
      "Sesamum": ["Phyllody", "Stem Rot", "Blight", "Leaf Spot", "Wilt"],
      "Bananas": ["Panama Disease", "Sigatoka", "Bunchy Top", "Mosaic", "Anthracnose"],
      "Onions": ["Purple Blotch", "Stemphylium Blight", "Downy Mildew", "Basal Rot", "Smudge"]
    };
    return diseaseMap[crop] || [];
  };

  const getDiseaseImageUrl = (crop, disease) => {
    const query = encodeURIComponent(`${crop} ${disease}`);
    return `https://www.google.com/search?tbm=isch&q=${query}`;
  };

  useEffect(() => {
    if (selectedCrop) {
      setIsLoading(true);
      setTimeout(() => {
        setAvailableDiseases(getDiseases(selectedCrop));
        setSelectedDisease('');
        setIsLoading(false);
      }, 300);
    }
  }, [selectedCrop]);

  const handleSearch = () => {
    if (selectedCrop && selectedDisease) {
      navigate(`/result?crop=${encodeURIComponent(selectedCrop)}&disease=${encodeURIComponent(selectedDisease)}`);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-10 relative overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-300 rounded-full opacity-10"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-green-800 mb-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Crop Disease Solutions
            </motion.h1>
            <motion.p 
              className="text-lg text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Find the right treatment for your crop diseases
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Crop Selector */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">Select Crop</label>
              <select
                className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg shadow-sm transition-all"
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
              >
                <option value="">Select crop</option>
                {crops.map(crop => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>

            {/* Disease Selector Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">Select Disease</label>
              {isLoading ? (
                <p className="text-gray-400 p-4 border-2 border-gray-200 rounded-xl bg-gray-50">Loading diseases...</p>
              ) : !selectedCrop ? (
                <p className="text-gray-400 p-4 border-2 border-gray-200 rounded-xl bg-gray-50">Select crop first</p>
              ) : availableDiseases.length === 0 ? (
                <p className="text-gray-400 p-4 border-2 border-gray-200 rounded-xl bg-gray-50">No diseases available</p>
              ) : (
                <div className="relative">
                  <select
                    className="w-full p-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg shadow-sm transition-all"
                    value={selectedDisease}
                    onChange={(e) => setSelectedDisease(e.target.value)}
                  >
                    <option value="">Select disease</option>
                    {availableDiseases.map((disease) => (
                      <option key={disease} value={disease}>
                        {disease}
                      </option>
                    ))}
                  </select>

                  {/* Camera Icon */}
                  {selectedDisease && (
                    <a
                      href={getDiseaseImageUrl(selectedCrop, selectedDisease)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800"
                      title={`View ${selectedDisease} images`}
                    >
                      <Camera className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handleSearch}
              disabled={!selectedCrop || !selectedDisease}
              className={`w-full py-4 text-white rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg ${!selectedCrop || !selectedDisease ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              whileHover={(!selectedCrop || !selectedDisease) ? {} : { scale: 1.02 }}
              whileTap={(!selectedCrop || !selectedDisease) ? {} : { scale: 0.98 }}
            >
              {!selectedCrop ? 'Select a crop' : !selectedDisease ? 'Select a disease' : 'Find Treatments'}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
