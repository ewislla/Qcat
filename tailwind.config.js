/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'cosmic-purple': '#9D00FF',
        'golden': '#FFD700',
        'space-black': '#050A30',
        'deep-purple': '#1a0033',
        'cyber-pink': '#FF00FF',
        'digital-green': '#00FF00',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'retro': ['"VT323"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        starfall: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite',
        'rotate': 'rotate 10s linear infinite',
        'starfall': 'starfall 5s linear infinite',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF',
        'neon-purple': '0 0 5px #9D00FF, 0 0 10px #9D00FF',
        'neon-gold': '0 0 5px #FFD700, 0 0 10px #FFD700',
      },
    },
  },
  plugins: [],
};