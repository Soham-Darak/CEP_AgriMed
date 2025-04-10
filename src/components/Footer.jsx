import { Mail, Phone, MapPin, Info, Home, Contact, Lock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import agriLogo from '../assets/AgricompareLogo.png';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 mt-10 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img src={agriLogo} alt="AgriCompare Logo" className="w-10 h-10 rounded-full shadow-md" />
              <h3 className="text-2xl font-bold text-white">AgriMed</h3>
            </div>
            <p className="text-green-200 text-sm">
              Helping farmers find the best solutions for crop diseases since 2025. Empowering agriculture through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Info className="w-5 h-5" /> Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Home className="w-4 h-4 text-green-300" />
                <Link to="/home" className="text-green-300 hover:text-white transition duration-200 hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-green-300" />
                <Link to="/about" className="text-green-300 hover:text-white transition duration-200 hover:underline">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Contact className="w-4 h-4 text-green-300" />
                <Link to="/contact" className="text-green-300 hover:text-white transition duration-200 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Contact Us
            </h3>
            <address className="text-green-300 text-sm not-italic leading-6 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />RCOEM, Nagpur, Maharashtra, India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@agrimed.com" className="hover:text-white hover:underline">info@agrimed.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+11234567890" className="hover:text-white hover:underline">+91 83295 54046</a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-green-400">
          <p>&copy; {new Date().getFullYear()} AgriMed. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="flex items-center gap-1 hover:text-white hover:underline transition">
              <Lock className="w-4 h-4" /> Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="flex items-center gap-1 hover:text-white hover:underline transition">
              <ShieldCheck className="w-4 h-4" /> Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient stripe at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 animate-pulse" />
    </footer>
  );
};

export default Footer;
