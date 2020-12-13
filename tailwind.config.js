const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      colors: {
        ...colors,
        'primary': '#1A1A2E',
        'tertiary': 'rgba(196, 196, 196, 0.07)',
        'secondary':'#E94560',
        'hash': 'rgba(233, 69, 96, 0.7)',
      },
      extend: {
        fontFamily:{
          'body': ['"Nunito Sans"']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  