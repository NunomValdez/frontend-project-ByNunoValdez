module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
   //algumas cores que usarei no projeto
    extend: {
      colors:{
        primary: '#ff4800',
        secundary: '#2196f3',
        transparent: 'transparent',
       current: 'currentColor',
       grafite: '#384543',
       diospiro: '#EF6F53',
       ivory: '#B1B2B4',
       tangerine: '#F6A152',
       brick: '#DC4E24',
       mostard: '#E9AC31',
       safire: '#4B8ABD'
      },

      backgroundImage:{
        'hero-pattern' : "linear-gradient(rgba(255,255,255,0.6), rgba(135, 60, 156, 0.5)),url('/public/irene-kredenets-AWMWcR3hQUg-unsplash.jpg') "
       },
    },
  },
  plugins: [],
}