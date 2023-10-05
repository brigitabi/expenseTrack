/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: { 
        primary: 'var(--color-bg-primary)', 
      }, 
      textColor: { 
        accent: 'var(--color-text-accent)', 
        primary: 'var(--color-text-primary)',
      }
    },
  },
  plugins: [],
}



