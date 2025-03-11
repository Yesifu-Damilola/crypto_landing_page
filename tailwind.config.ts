/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        glory: ["Glory", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
