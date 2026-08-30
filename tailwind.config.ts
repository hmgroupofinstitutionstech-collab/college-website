import type { Config } from "tailwindcss";

/**
 * Colors reference CSS variables defined in src/app/globals.css.
 * To re-theme the whole site, edit those variables — not this file.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        "navy-dark": "var(--color-navy-dark)",
        gold: "var(--color-gold)",
        "gold-dark": "var(--color-gold-dark)",
        charcoal: "var(--color-charcoal)",
        "surface-muted": "var(--color-surface-muted)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 42, 74, 0.08), 0 8px 24px rgba(15, 42, 74, 0.06)",
        "card-hover":
          "0 4px 8px rgba(15, 42, 74, 0.10), 0 16px 40px rgba(15, 42, 74, 0.12)",
        header: "0 1px 0 rgba(15, 42, 74, 0.08), 0 6px 20px rgba(15, 42, 74, 0.06)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
