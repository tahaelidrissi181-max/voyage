/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ocean:  '#0A3D62',
        sky:    '#1A9BD7',
        sea:    '#00C9A7',
        sand:   '#F5F0E8',
        coral:  '#FF6B35',
        gold:   '#F4B942',
      },
    },
  },
  plugins: [],
}
