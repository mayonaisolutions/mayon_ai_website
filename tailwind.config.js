/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          main: 'var(--color-bg-main)',
          card: 'var(--color-bg-card)',
          hover: 'var(--color-bg-hover)',
        },
        brand: {
          accent: 'var(--color-brand-accent)',
          volcano: 'var(--color-brand-volcano)',
          glow: 'var(--color-brand-glow)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        border: {
          main: 'var(--color-border-main)',
          subtle: 'var(--color-border-subtle)',
        }
      },
      boxShadow: {
        'volcanic': 'var(--shadow-volcanic)',
        'volcanic-lg': 'var(--shadow-volcanic-lg)',
        'volcanic-glow': 'var(--shadow-volcanic-glow)',
      },
      backgroundImage: {
        'volcanic-gradient': 'linear-gradient(to right, var(--color-brand-volcano), var(--color-brand-accent))',
        'volcanic-radial': 'radial-gradient(circle, var(--color-brand-glow) 0%, transparent 70%)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
