/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:
      {
        main: {
          pink: '#ff69b4', blue: '#757ad8', teal: '#90e4c1',
          'dark-pink': '#BA5CB3',
          'dark-blue': '#5064be',
          'dark-teal': '#009291',
        },
        default: '#3232c8', success: '#32c832', danger: '#c83232'
      },
      boxShadow:
      {
        "main-outer": '0px 8px 4px -5px rgba(0,0,0,0.25), 0px 6px 6px 0px rgba(0,0,0,0.2), 0px 4px 10px 0px rgba(0,0,0,0.16)',
        "main-inner": 'inset 0px 8px 4px -5px rgba(0,0,0,0.25), inset 0px 6px 6px 0px rgba(0,0,0,0.2), inset 0px 4px 10px 0px rgba(0,0,0,0.16)',
        "main-outer-inverted": '0px 8px 4px -5px rgba(100,100,100,0.25), 0px 6px 6px 0px rgba(100,100,100,0.2), 0px 4px 10px 0px rgba(100,100,100,0.16)',
        "main-inner-inverted": 'inset 0px 8px 4px -5px rgba(100,100,100,0.25), inset 0px 6px 6px 0px rgba(100,100,100,0.2), inset 0px 4px 10px 0px rgba(100,100,100,0.16)',
      },
      fontFamily:
      {
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
        'georgia': ['Georgia', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
  darkMode: "class",
  important: true
}