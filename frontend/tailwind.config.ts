import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0ea5e9', // Sky blue accent
          600: '#0284c7',
          900: '#0c4a6e',
        },
        darkbg: '#090d16', // Deep premium dark background
      },
    },
  },
  plugins: [],
} satisfies Config