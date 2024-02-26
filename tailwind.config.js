
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'marker': ["Permanent Marker", 'cursive'],
      'nunito': ["Nunito", ' sans-serif'],
      'ubuntu': ["Ubuntu", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'coding-img': "url('./src/assets/bg for projects.png')"
      }
    },
   
  },
  plugins: [],
};
