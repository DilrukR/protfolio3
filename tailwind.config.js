/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontNav: ["Orbitron"],
      },

      colors: {
        primery: "#000814",
        secondory: "#001d3d",
        third: "#003566",
        yellowText: {
          light: "#ffd60a",
          dark: "#ffc300",
        },
      },
    },
  },
  plugins: [],
};
