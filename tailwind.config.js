/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    
    },

    backgroundImage:{
      "news__bg": "url('./assets/Home/news__bg.jpeg) center center/cover",
    }


  },

  plugins: [],
}
