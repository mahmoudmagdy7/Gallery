/* eslint-disable no-undef */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        // smd: "920px", // Custom screen size
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
