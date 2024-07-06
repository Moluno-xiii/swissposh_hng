/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2400px",
      },
      fontFamily: {
        sans: "satoshi, serif",
        futura: ["futura lt", "serif"],
      },
      colors: {
        primary: "#001F3F",
      },
      fontSize: {
        xxs: "8px",
      },
    },
  },
  plugins: [],
};
