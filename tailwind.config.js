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
        'big-banner-1': "url('images/banner/b17.jpg')",
        'big-banner-2': "url('images/banner/b10.jpg')",
        'small-banner-1': "url('images/banner/b7.jpg')",
        'small-banner-2': "url('images/banner/b4.jpg')",
        'small-banner-3': "url('images/banner/b18.jpg')",
        'newsletter': "url('images/banner/b14.png')",
      }
    },
  },
  plugins: [],
}

