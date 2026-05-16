import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          white: "#FFFFFF",
          black: "#111111",
          grey: "#86868B",
          "grey-light": "#F5F5F7",
          orange: "#FF6B00",
          "orange-hover": "#E56000",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        "tight-custom": "-0.025em",
        "tighter-custom": "-0.04em",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1.0625rem", { lineHeight: "1.7", fontWeight: "400" }],
      },
      boxShadow: {
        soft: "0 2px 20px -2px rgba(0, 0, 0, 0.05)",
        "soft-lg": "0 8px 40px -8px rgba(0, 0, 0, 0.08)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.04)",
      },
      backdropBlur: {
        nav: "20px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
