import type { Config } from "tailwindcss";

const config: Config = {
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
        "just-purple": "#A78BFA", // Custom purple shade
        "just-blue": "#93C5FD", // Custom blue shade
        "just-green": "#86EFAC", // Custom green shade
      },
    },
  },
  plugins: [],
};
export default config;
