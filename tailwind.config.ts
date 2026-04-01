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
        ivory: "#FAFAF8",
        fig: "#4A3728",
        taupe: "#B5A99A",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "'Helvetica Neue'", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "700": "700ms",
      },
    },
  },
  plugins: [],
};
export default config;
