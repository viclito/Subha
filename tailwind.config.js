/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playful: ['"Poppins"', 'sans-serif'],
        script: ['"Pacifico"', 'cursive'],
      },
      colors: {
        birthday: {
          pink: '#FF5DA2',
          purple: '#7C4DFF',
          yellow: '#FFE066',
          teal: '#4DD0E1',
        },
      },
      backgroundImage: {
        'confetti-gradient':
          'radial-gradient(circle at 10% 20%, rgba(255,221,64,0.6) 0, transparent 50%), radial-gradient(circle at 80% 0%, rgba(255,93,162,0.45) 0, transparent 45%), radial-gradient(circle at 20% 80%, rgba(124,77,255,0.45) 0, transparent 45%), radial-gradient(circle at 90% 70%, rgba(77,208,225,0.5) 0, transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 93, 162, 0.35)',
      },
    },
  },
  plugins: [],
}

