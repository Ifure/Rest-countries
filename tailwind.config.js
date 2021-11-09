module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
     container: {
      center: true,

       padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
   extend:{
    colors: {
      blue: {
        darkElement: "#2B3945",
        darkBg: "#202C37",
        lightText: "#111517"
 
      },
      gray: {
       dark: "#858585" ,
       light: "#FAFAFA"
      }
     }
   }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
