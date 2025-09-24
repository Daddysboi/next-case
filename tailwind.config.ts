import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#04C171",
        primary: "#06241B",
        accent: "#E9F8F3",
        accent2: "#EEF8F5",
        grey: "#6D737A",
      },
    },
  },
  plugins: [],
};
export default config;
