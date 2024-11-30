/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",          // Include all layouts
    "./content/**/*.md",            // Include all content files
    "./themes/polish-davmar/**/*.html",  // Include templates from the theme
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      cata: ['Catamaran', 'sans-serif'],
    },
  },
  plugins: [],
}

