/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { boxShadow: {
      "custom-box": '0px 2px 6px 0px #1A181E0A'
    },
      fontSize: {
        'custom-lg': '30px', 
        'custom-sm': '18px', 
        'custom-ssm':'14px', 
        'custom-h4':'32px',
        'custom-h5':'20px', 
        'custom-p':'15px', 
      },
      textColor:{
        skin:{
          base:'var(--color-text-base)',
        }
      },
      backgroundColor:{
        skin:{
          base:'var(--background-color-base)',
          hover:'var(--hover-color)',
          greybg:'var(--base-bg-color)'
        }
      }
    },
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '999px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},  
      },
  },
  plugins: [],
}