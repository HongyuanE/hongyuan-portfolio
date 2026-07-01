/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0b1220",
        surface: "#111a2e",
        hair: "#1e293b",
        ink: "#f1f5f9",
        "ink-muted": "#94a3b8",
        "ink-faint": "#5b6b8a",
        accent: "#EF9F27",
        "accent-ink": "#412402",
        live: "#34d399",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
