import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        madera: {
          oscura: "#3E2723", 
          clara: "#5D4037",  
        },
        fuego: "#FF6F00",    
        dorado: "#D4AF37",
        pergamino: "#F5EFEB" 
      },
      fontFamily: {
        mitologica: ['var(--font-cinzel)', 'serif'],
        texto: ['var(--font-montserrat)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;