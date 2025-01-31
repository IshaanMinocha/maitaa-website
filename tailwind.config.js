/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        subhead: ['Overlock SC', 'sans-serif'],
        heading: ['Noto Sans', 'sans-serif'],
        normaltext: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        smriti: "url('smriti-bg2.jpg')"
      },
      colors: {
        light: '#F9F3DC',
        dark: '#121212',
        primary: '#EF574A',
        secondary: '#01447C'
      }
    }
  },
  // plugins: [require('daisyui')]
}
