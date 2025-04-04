const Footer = () => {
    return (
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AgriMed</h3>
              <p className="text-green-200">
                Helping farmers find the best solutions for crop diseases since 2023.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/home" className="text-green-200 hover:text-white transition">Home</a></li>
                <li><a href="/about" className="text-green-200 hover:text-white transition">About Us</a></li>
                <li><a href="/contact" className="text-green-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-green-200">
                <p>123 Farm Road</p>
                <p>Agricultural City, AC 12345</p>
                <p>Email: info@agrimed.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} AgriMed. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;