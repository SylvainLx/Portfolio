/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        type: "type 2.2s ease-out .8s infinite alternate both",
        "fade-in-right": "fade-in-right 1s ease-out",
        "fade-in-right2": "fade-in-right 1.3s ease-out",
        "fade-in-right3": "fade-in-right 1.6s ease-out",
        "fade-in-right4": "fade-in-right 1.9s ease-out",
        "fade-in-right5": "fade-in-right 2.2s ease-out",
        "fade-in-down": "fade-in-down 1s ease-out",
      },

      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
          "65%, 70%": { transform: "translateX(7ch)" },
          "75%, 80%": { transform: "translateX(8ch)" },
          "85%, 100%": { transform: "translateX(10ch)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundImage: {
        backgroundInto: "url('../public/fondIntro.webp')",
      },
    },
  },
  plugins: [],
};
