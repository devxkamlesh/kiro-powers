import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#9046ff",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#a855f7",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#71717a",
          foreground: "#a1a1aa",
        },
        border: "#352f3d",
        glass: "rgba(25, 25, 25, 0.6)",
      },
      fontFamily: {
        sans: ["var(--font-diatype)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
