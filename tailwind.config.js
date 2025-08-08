/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "system-ui", "sans-serif"],
        freight: ["'FreightBig Pro'", "serif"],
      },
    },
  },
  plugins: [],
}

