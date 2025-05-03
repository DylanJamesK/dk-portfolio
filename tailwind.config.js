/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['"montserrat"', 'sans-serif'],
          heading: ['"montserrat"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  