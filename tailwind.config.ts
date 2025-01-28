import type { Config } from "tailwindcss";

export default {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  // plugins: [],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    container: {
        center: true,
        padding: "16px",
    },
    extend: {
        colors: {
            primary: "#14b8a6",
            dark: "#0f172a",
            secondary: "#64748b",
        },
        screens: {
            "2xl": "1320px",
        },
        fontFamily: {
          sans: ['var(--font-geist-sans)'],
          mono: ['var(--font-geist-mono)'],
        },
    },
  },
  plugins: [],
} satisfies Config;
