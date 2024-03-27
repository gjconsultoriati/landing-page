/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // prettier-ignore
        'background': "url('/assets/background.png')",
      },
      colors: {
        blue: {
          900: '#214ae7',
          800: '#1e43d0',
          700: '#1a3bb9',
          600: '#1734a2',
          500: '#142c8b',
          400: '#112574',
          300: '#0d1e5c',
          200: '#0a1645',
          100: '#070f2e',
          50: '#030717',
          10: '#64A4EC',
        },
        green: {
          900: '#d5e739',
          800: '#c0d033',
          700: '#aab92e',
          600: '#95a228',
          500: '#808b22',
          400: '#6b741d',
          300: '#555c17',
          200: '#404511',
          100: '#2b2e0b',
          50: '#151706',
        },
        gray: {
          900: '#e8e8e8',
          800: '#d1d1d1',
          700: '#bababa',
          600: '#a2a2a2',
          500: '#8b8b8b',
          400: '#747474',
          300: '#5d5d5d',
          200: '#464646',
          100: '#2e2e2e',
          50: '#171717',
        },
        black: {
          900: '#1a0046',
          800: '#17003f',
          700: '#150038',
          600: '#120031',
          500: '#10002a',
          400: '#0d0023',
          300: '#0a001c',
          200: '#080015',
          100: '#05000e',
          50: '#030007',
        },
      },

      fontFamily: {
        exo2: ['Exo2', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-in',
      },
    },
  },
  plugins: [],
}
