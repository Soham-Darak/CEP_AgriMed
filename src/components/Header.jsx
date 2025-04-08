import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Logo from "../assets/Agricompare Logo.png";

=======
import { motion } from "framer-motion";
import Logo from "../assets/Agricompare Logo.png";

const MotionLink = motion(Link);

>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
const Header = () => {
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Remove old widget if re-rendering
    const existingScript = document.getElementById("google-translate-script");
    const existingWidget = document.querySelector(".goog-te-combo");

    if (existingWidget) {
      existingWidget.remove();
    }

    const initializeTranslate = () => {
      if (!window.google || !window.google.translate) {
        setTimeout(initializeTranslate, 100);
        return;
      }

=======
    const initTranslate = () => {
      if (!window.google?.translate) {
        setTimeout(initTranslate, 100);
        return;
      }
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
<<<<<<< HEAD

      setIsTranslateReady(true);
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = initializeTranslate;

    if (window.google && window.google.translate) {
      initializeTranslate();
    }
=======
      setIsTranslateReady(true);
    };

    // Append script only once
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = initTranslate;
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)

    return () => {
      window.googleTranslateElementInit = null;
    };
  }, []);

  useEffect(() => {
    if (!isTranslateReady) return;

    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-combo {
<<<<<<< HEAD
        padding: 6px 10px !important;
        border-radius: 6px !important;
        border: 1px solid #ccc !important;
        background-color: #f3f4f6 !important;
        font-size: 14px !important;
        color: #374151 !important;
        max-width: 140px !important;
        width: 100% !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
      .goog-tooltip,
      .goog-tooltip:hover {
        display: none !important;
      }
=======
        padding: 8px 10px !important;
        border-radius: 8px !important;
        border: 1px solid #d1d5db !important;
        background-color: #f9fafb !important;
        font-size: 14px !important;
        color: #1f2937 !important;
        width: 100% !important;
        font-family: inherit !important;
        transition: all 0.3s ease;
        margin-top: 2px;
      }
      .goog-te-banner-frame { display: none !important; }
      body { top: 0 !important; }
      .goog-tooltip, .goog-tooltip:hover { display: none !important; }
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
      .goog-text-highlight {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
<<<<<<< HEAD

    return () => {
      document.head.removeChild(style);
    };
  }, [isTranslateReady]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3">
        {/* Logo & Title */}
        <Link
          to="/home"
          className="flex items-center gap-2 group flex-shrink-0"
          aria-label="AgriCompare Home"
        >
          <img
            src={Logo}
            alt="AgriCompare Logo"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold text-green-700 group-hover:text-green-600 transition-colors">
            AgriMed
          </span>
        </Link>

        {/* Navigation + Translate */}
        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-end sm:justify-normal flex-wrap sm:flex-nowrap">
          <nav className="flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
            <Link
              to="/home"
              className="text-gray-700 font-medium hover:text-green-600 transition-colors text-base sm:text-lg whitespace-nowrap"
              aria-current="page"
            >
              Home
            </Link>
          </nav>

          {/* Translate Widget */}
          <div className="flex-shrink-0 w-[140px]">
            <div
              id="google_translate_element"
              style={{
                opacity: isTranslateReady ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            ></div>
            {!isTranslateReady && (
              <div className="h-9 w-full bg-gray-100 rounded-md animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </header>
=======
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

          {/* Nav + Translate */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              {["Home", "Contact Us"].map((label) => {
                const path = label === "Home" ? "/home" : "/contact";
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

            {/* Translate Widget */}
            <div className="flex-shrink-0 w-[160px] sm:w-[180px]">
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
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
  );
};

export default Header;
