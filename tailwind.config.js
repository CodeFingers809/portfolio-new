/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "animate-gradient 5s ease infinite",
      },
      keyframes: {
        "animate-gradient": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      linearGradientColors: {
        rainbow: [
          "0deg",
          "rgb(255, 0, 0)",
          "90deg",
          "rgb(255, 0, 255)",
          "180deg",
          "rgb(0, 0, 255)",
          "270deg",
          "rgb(0, 255, 0)",
          "360deg",
          "rgb(255, 0, 0)",
        ],
      },
      cursor: {
        theme: "url(../public/cursor.svg), default",
      },
    },
  },
  plugins: [],
};

