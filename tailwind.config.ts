import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#F6F5F2",
        graphite: "#EFECE6",
        gold: "#C8A96B",
        soft: "#111114",
        titanium: "#7A7A80"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 18px 42px rgba(200, 169, 107, 0.18)",
        panel: "0 24px 80px rgba(17, 17, 20, 0.10)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(200,169,107,0.16), transparent 45%)",
        "panel-glow": "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(239,236,230,0.68))"
      }
    }
  },
  plugins: []
};

export default config;
