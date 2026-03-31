import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        cream: "#F5F0EB",
        sand: "#D4C5A9",
        gold: "#B8860B",
        burgundy: "#6B2D3E",
        olive: "#6B6B4E",
        stone: "#8C8279",
        oat: "#E8DFD0",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
