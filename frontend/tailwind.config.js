/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontSize: {
        'custom-lg': '40px', 
      },
      textColor:{
        skin:{
          base:'var(--color-text-base)',
        }
      },
      backgroundColor:{
        skin:{
          base:'var(--background-color-base)',
          hover:'var(--hover-color)'
        }
      }
    },
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},  
      },
  },
  plugins: [],
}