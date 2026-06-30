import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e6faf7",
          100: "#b3f0e8",
          200: "#80e6d9",
          300: "#4ddcca",
          400: "#1ad2bb",
          500: "#00c9a7",
          600: "#00a388",
          700: "#007d69",
          800: "#00574a",
          900: "#00312b",
          950: "#000f0d",
        },
      },
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "-apple-system", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,201,167,0.25) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
