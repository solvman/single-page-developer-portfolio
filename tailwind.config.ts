import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      error: "hsl(7, 100%, 68% )",
      accent: "hsl(153, 71%, 59%)",
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(0, 0%, 85%)",
      "background-primary": "hsl(0, 0%, 8%)",
      "background-secondary": "hsl(0, 0%, 14%)",
    },
    extend: {
      screens: {
        lg: "1174px",
      },
      fontFamily: {
        sans: "var(--space-grotesk-font)",
      },
    },
  },
  plugins: [],
};
export default config;
