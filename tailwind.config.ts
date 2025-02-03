import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/fonts/**/*.{woff,woff2,ttf}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--text-color)",
      },
      fontFamily: {
        akkurat: ["Akkurat", "Arial", "Helvetica", "sans-serif"],
        stardom: ["Stardom", "sans-serif"],
        amulya: ["Amulya", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
