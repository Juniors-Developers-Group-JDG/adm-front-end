import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          900: '#00EBF0',
          800: '#FAFAFA',
          700: '#111315',
          600: '#1a1a1a',
          500: '#202020',
          400: '#2e2e2e',
          300: '#114041',
          200: '#8B8B8B',
        },
        secondary: {
          900: '#65D90B',
          800: '#D9B80B',
          700: '#D90B0B',
          600: '#0B8FD9',
        },
        blue: {
          50: '#EDF5FD',
          100: '#C8E0F9',
          200: '#7EB6F1',
          300: '#5AA1ED',
          400: '#358CE9',
          500: '#1877DC',
          600: '#1463B8',
          700: '#104F93',
          800: '#0C3C6E',
          900: '#061F37',
        },
        success: {
          50: '#F1F9F4',
          100: '#D4EDDD',
          200: '#A9DBBB',
          300: '#8CCFA4',
          400: '#6FC38C',
          500: '#52B776',
          600: '#3C9059',
          700: '#307348',
          800: '#245636',
          900: '#122B1B',
        },
        danger: {
          50: '#FCEEEE',
          100: '#F6CBCB',
          200: '#ED9797',
          300: '#E36363',
          400: '#DD4040',
          500: '#D02525',
          600: '#9C1C1C',
          700: '#791515',
          800: '#570F0F',
          900: '#340909',
        },
      },
    },
  },
  plugins: [],
}
export default config
