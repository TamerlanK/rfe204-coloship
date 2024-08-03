/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fe4c50",
          light: "#fe7c7f",
        },
        ntrl: {
          DEFAULT: "#1e1e27",
          clr600: "##282828",
          clr500: "#51545f",
          clr400: "#b5aec4",
          clr300: "#eceff6",
          clr200: "#f3f3f3",
          clr100: "#f2f2f2",
        },
        success: "#51a042",
      },
    },
  },
  plugins: [],
}
