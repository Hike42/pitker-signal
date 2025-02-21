import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pitkerBlue: '#003769',
        pitkerRed: '#E63237',
        pitkerGray: '#AAAAAA',
        pitkerGrey: '#F5F5F5',
      },
    },
  },
  plugins: [],
} satisfies Config;
