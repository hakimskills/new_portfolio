/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2ECD8",
        card: "#FBF7EA",
        paper: "#F6F1DF",
        yolk: "#F0C24E",
        yolkDark: "#E0AC2B",
        clay: "#D6381F",
        clayDark: "#B12E18",
        ink: "#1E1B14",
        inkSoft: "#4A4432",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        pin: "0 10px 24px -8px rgba(30,27,20,0.35)",
      },
    },
  },
  plugins: [],
};
