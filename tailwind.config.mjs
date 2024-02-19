import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(4, minmax(100px, 200px))",
      },
      fontFamily: {
        mono: ["Fira Code Variable", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          50: "#ECF0F3",
          100: "#D9E1E8",
          200: "#B3C2D1",
          300: "#89A1B8",
          400: "#6383A1",
          500: "#4B647C",
          600: "#3C5062",
          700: "#2C3B49",
          800: "#1F2933",
          900: "#0F1519",
          950: "#080A0D",
        },
      },
    },
  },
  plugins: [],
};
