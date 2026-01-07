/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  darkMode: 'class', // 클래스 기반 다크모드 사용
  // safelist: [
  //   // 전역 색상 클래스 safelist (패턴 기반)
  //   {
  //     pattern: /^(bg|text|border)-(bg|button|body|border|icon)-(light|dark)$/,
  //     variants: ['dark', 'hover', 'dark:hover'],
  //   },
  //   {
  //     pattern: /^(bg|text|border)-(button-hover)-(light|dark)$/,
  //     variants: ['hover', 'dark:hover'],
  //   },
  // ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#646cff',
        'primary-hover': '#535bf2',
        'primary-hover-light': '#747bff',

        // 전역 색상 팔레트
        'theme-light': '#ffffff',
        'theme-dark': '#242424',
        'button-light': '#f3f4f6', // gray-100
        'button-dark': '#1a1a1a',
        'button-hover-light': '#e5e7eb', // gray-200
        'button-hover-dark': '#2a2a2a',
        'body-light': '#213547',
        'body-dark': 'rgba(255,255,255,0.87)',
        'border-light': '#e5e7eb', // gray-200
        'border-dark': '#374151', // gray-700
        'icon-light': '#374151', // gray-700
        // 'icon-dark': '#eab308', // yellow-500
        'icon-dark': '#ffffff', // yellow-500
      },
    },
  },
  plugins: [],
}

