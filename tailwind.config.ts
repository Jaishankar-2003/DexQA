import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A1A2F", // Deep Navy
        },
        accent: {
          DEFAULT: "#007BFF", // Electric Blue
        },
        secondary: {
          DEFAULT: "#00C7B7", // Teal
        },
        indigo: {
          soft: "#EEF4FF", // Soft Indigo
        },
        mint: {
          tint: "#ECFEFF", // Mint Tint
        },
        gray: {
          warm: "#F8FAFC", // Warm Gray
        },
      },
      fontFamily: {
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(10, 26, 47, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(10, 26, 47, 0.03) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(10, 26, 47, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
        'dots': '20px 20px',
      },
    },
  },
  plugins: [],
};
export default config;

