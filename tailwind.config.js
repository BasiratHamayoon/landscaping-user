/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F5A1F',
          dark: '#143d14',
          light: '#2d7a2d',
        },
        accent: {
          DEFAULT: '#F5C518',
          dark: '#d4a90f',
        },
        darkText: '#0d2818',
      },
    },
  },
  plugins: [],
};