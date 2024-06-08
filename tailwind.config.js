/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        League: "'League Spartan', serif"
      },
      backgroundImage: {
        'button': "url('/images/button.png')",
        'hero': "url('/images/hero4.png')",
        'banner': "url('images/banner/b2.jpg')",
        
      }
    },
  },
  plugins: [],
}

