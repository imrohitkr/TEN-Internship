/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        footer: "#27282c", // Corrected custom color definition
      },
    },
  },
  plugins: [],
};
