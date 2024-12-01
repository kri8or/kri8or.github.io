/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",          // Include all layouts
    "./content/**/*.md",            // Include all content files
    "./themes/polish-davmar/**/*.html",  // Include templates from the theme
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mateDark: 'hsl(260, 8%, 14%) '
      }
    },
    fontFamily: {
      cata: ['Catamaran', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}

