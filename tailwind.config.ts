import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "hsl(7, 100%, 68% )",
      green: "hsl(153, 71%, 59%)",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 85%)",
      "dark-grey": "hsl(0, 0%, 14%)",
      black: "hsl(0, 0%, 8%)",
    },
    extend: {
      fontFamily: {
        sans: "var(--space-grotesk-font)",
      },
    },
  },
  plugins: [],
};
export default config;
