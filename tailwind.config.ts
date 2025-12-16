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
        background: "#ffffff", // White
        foreground: "#0f172a", // Slate 900
        primary: {
          DEFAULT: "#4f46e5", // Indigo 600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0891b2", // Cyan 600
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#7c3aed", // Violet 600
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9", // Slate 100
          foreground: "#64748b", // Slate 500
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};
export default config;
