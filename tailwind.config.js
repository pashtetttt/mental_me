/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e073e",
        secondary: "#7a1dac",
        accent: "#ad49e1",
        light: "#ebd3f7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        deep: "0 10px 30px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
