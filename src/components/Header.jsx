import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/AgricompareLogo.png";

const MotionLink = motion(Link);

const Header = () => {
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  // Initialize Google Translate
  useEffect(() => {
    const existingScript = document.getElementById("google-translate-script");
    const existingWidget = document.querySelector(".goog-te-combo");
    if (existingWidget) existingWidget.remove();

    const initTranslate = () => {
      if (!window.google?.translate) {
        setTimeout(initTranslate, 100);
        return;
      }
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setIsTranslateReady(true);
    };

    if (!existingScript) {
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }

    window.googleTranslateElementInit = initTranslate;
    if (window.google?.translate) initTranslate();

    return () => {
      window.googleTranslateElementInit = null;
    };
  }, []);

  // Style Google Translate Widget
  useEffect(() => {
    if (!isTranslateReady) return;
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-combo {
        padding: 8px 14px !important;
        border-radius: 8px !important;
        border: 1px solid #d1d5db !important;
        background-color: #f9fafb !important;
        font-size: 14px !important;
        color: #1f2937 !important;
        width: 100% !important;
        font-family: inherit !important;
        transition: all 0.3s ease;
      }
      .goog-te-banner-frame { display: none !important; }
      body { top: 0 !important; }
      .goog-tooltip, .goog-tooltip:hover { display: none !important; }
      .goog-text-highlight {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [isTranslateReady]);

  return (
    <>
      <div className="h-3 bg-white"></div>
      <header className="bg-white shadow-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <img
              src={Logo}
              alt="AgriMed Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl md:text-3xl font-extrabold text-green-700 group-hover:text-green-600 transition-colors">
              AgriMed
            </span>
          </Link>

          {/* Navigation + Language Dropdown */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              {["Home", "About Us", "Contact Us"].map((label) => {
                const path =
                  label === "Home"
                    ? "/home"
                    : label === "About Us"
                    ? "/about"
                    : "/contact";
                return (
                  <div key={label} className="relative group">
                    <MotionLink
                      to={path}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-700 hover:text-green-600 font-semibold text-lg md:text-xl transition-colors"
                    >
                      {label}
                    </MotionLink>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-green-500 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-200" />
                  </div>
                );
              })}
            </nav>

            {/* Google Translate Widget */}
            <div className="flex-shrink-0 w-[160px]">
              <div
                id="google_translate_element"
                style={{
                  opacity: isTranslateReady ? 1 : 0,
                  transition: "opacity 0.4s ease-in-out",
                }}
              />
              {!isTranslateReady && (
                <div className="h-9 w-full bg-gray-100 rounded-md animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
