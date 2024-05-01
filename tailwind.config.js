/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react"

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shark: {
          DEFAULT: '#24272c',
        },
      },
      fontFamily: {
        sans: ['var(--font-phudu)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}


export default config;