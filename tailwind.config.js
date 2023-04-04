/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012ff",
        green: "#67d4ca",
        red: "#f28080",
      },
    },
  },
  plugins: [],
};
