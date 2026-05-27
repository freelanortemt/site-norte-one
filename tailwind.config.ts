import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0D",
        graphite: "#1A1A1F",
        gold: "#C8A96B",
        soft: "#F6F5F2",
        titanium: "#7A7A80"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 18px 42px rgba(200, 169, 107, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(200,169,107,0.18), transparent 45%)",
        "panel-glow": "linear-gradient(135deg, rgba(26,26,31,0.92), rgba(11,11,13,0.78))"
      }
    }
  },
  plugins: []
};

export default config;
