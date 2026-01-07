/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // prefers-color-scheme 미디어 쿼리 사용
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#646cff',
        'primary-hover': '#535bf2',
        'primary-hover-light': '#747bff',
      },
    },
  },
  plugins: [],
}

