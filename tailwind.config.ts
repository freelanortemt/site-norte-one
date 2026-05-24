import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0D",
        graphite: "#1A1A1F",
        gold: "#C8A96B",
        soft: "#F5F5F3",
        titanium: "#7A7A80"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 52px rgba(200, 169, 107, 0.16)",
        panel: "0 24px 90px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(200,169,107,0.24), transparent 42%)",
        "panel-glow": "linear-gradient(135deg, rgba(245,245,243,0.1), rgba(245,245,243,0.025))"
      }
    }
  },
  plugins: []
};

export default config;
