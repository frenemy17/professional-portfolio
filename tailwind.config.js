/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        'terminal-black': '#0C0C0C',
        'terminal-green': {
          400: '#4AF626',
          500: '#3BD319'
        },
        'terminal-cyan': {
          400: '#24D3D3',
          500: '#20B8B8'
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
};