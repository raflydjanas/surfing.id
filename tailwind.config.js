/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },

    extend: {
      colors: {
        skeey : '#0284c7',
        font : '#64748b',
        dark : '#155e75',
      },
      screens : {
        '2xl' : '1230px',
      },
    },
  },
  plugins: [],
}

