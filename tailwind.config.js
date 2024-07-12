/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Kaushan': "Kaushan Script, cursive",
        'Archivo': "Archivo, sans-serif",
      },
      fontSize: {
        '32': "32px",
        '25': "25px",
      },
      textColor: {
        'light_green': '#6E9277',
        'primary_black': '#001008',
      },
      backgroundColor: {
        'light_gray': '#F5F8F6',
        'light_green': '#6E9277',
      },
      lineHeight: {
        '32': '32px',
        '46': '46px',
        '62': '62px',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',
        },
        center: true,
      }
    },
  },
  plugins: [],
}
