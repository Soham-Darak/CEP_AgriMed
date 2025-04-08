/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Corrected Path
  theme: {
    extend: {
      animation: {
        "modal-in": "modalFadeIn 0.3s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
=======
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
        modalFadeIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
<<<<<<< HEAD
=======
      animation: {
        marquee: 'marquee 15s linear infinite',
        "modal-in": "modalFadeIn 0.3s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
    },
  },
  plugins: [],
};
