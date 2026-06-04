/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        brand: {
          DEFAULT: "#2f799c",
          dark: "#1f5a75",
          mid: "#276a88",
          light: "#6ebfe0",
          faint: "rgba(47, 121, 156, 0.18)",
          border: "rgba(47, 121, 156, 0.26)",
        },
        surface: {
          base: "#101414",
          soft: "#0d252d",
          card: "#123241",
          deep: "#08181e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        mono: ["Space Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 24px 90px rgba(47, 121, 156, 0.24)",
      },
    },
  },
  plugins: [],
};
