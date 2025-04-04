import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Agricompare Logo.png";

const Header = () => {
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
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

    return () => {
      window.googleTranslateElementInit = null;
    };
  }, []);

  useEffect(() => {
    if (!isTranslateReady) return;

    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-combo {
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
      .goog-text-highlight {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);

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
  );
};

export default Header;
