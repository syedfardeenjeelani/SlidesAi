/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "*"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"], // Define the Geist font
      },
    },
  },
  plugins: [],
};
