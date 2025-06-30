  /** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'custom-alumni': ['"Alumni Sans Pinstripe"', 'sans-serif'],
        'custom-bebas': ['"Bebas Neue"', 'sans-serif'],
        'custom-tuffy': ['"Tuffy"', 'sans-serif'],
        'custom-roboto-mono': ['"Roboto Mono"', 'monospace'],
        'custom-fira-code': ['"Fira Code"', 'monospace'],
        'custom-lato': ['"Lato"', 'sans-serif'],
      },
      fontSize: {
        'fluid': 'var(--text-fluid)',
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
