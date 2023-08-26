/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4576C0",
        light: "#a3a3a3",
        bggray: "#f0f0f0",
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        // padding: "1rem",

        // default breakpoints but with 40px removed
        screens: {
          // sm: "600px",
          // md: "728px",
          // lg: "984px",
          xl: "1240px",
          // "2xl": "1496px",
        },
      },
    },
  },
  plugins: [],
};
