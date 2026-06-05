import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "azul-norte": "#0B1F33",
        "off-white": "#F4F1EA",
        grafite: "#20242A",
        cobre: "#B87945",
        "azul-nevoa": "#D8E1E8",
        "cinza-pedra": "#8A8F98",
        obsidian: "#0B1F33",
        graphite: "#20242A",
        gold: "#B87945",
        soft: "#F4F1EA",
        titanium: "#8A8F98"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 18px 42px rgba(184, 121, 69, 0.18)",
        panel: "0 24px 80px rgba(6, 18, 30, 0.34)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(184,121,69,0.2), transparent 45%)",
        "panel-glow": "linear-gradient(135deg, rgba(32,36,42,0.9), rgba(11,31,51,0.72))"
      }
    }
  },
  plugins: []
};

export default config;
