const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "open-hamburger": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "close-hamburger": {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
        "show-on-scroll": {
          "0%": { opacity: "0", height: "0", transform: "translateY(30%)" },
          "100%": { opacity: "1", height: "100%", transform: "translateY(0%)" },
        },
      },
      animation: {
        "open-hamburger": "open-hamburger 0.5s ease-in-out forwards",
        "close-hamburger": "close-hamburger 0.5s ease-in-out forwards",
        "show-on-scroll": "show-on-scroll ease-in-out both",
      },
    },
  },
  plugins: [],
};
