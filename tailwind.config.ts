import type { Config } from "tailwindcss";
// @ts-ignore
import animations from '@midudev/tailwind-animations'


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
        'orange': "#f87e33",
        'black': "#222222",
        'beige': '#e5dfca',
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [animations],
} satisfies Config;
