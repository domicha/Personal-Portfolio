import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        fg: "#111111",
        "fg-muted": "#666666",
        "fg-subtle": "#999999",
        "bg-subtle": "#f7f7f7",
        border: "#e8e8e8",
      },
      letterSpacing: {
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
