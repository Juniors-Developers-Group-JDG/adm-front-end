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
        },
        secondary: {
          900: '#65D90B',
          800: '#D9B80B',
          700: '#D90B0B',
          600: '#0B8FD9',
        },
      },
    },
  },
  plugins: [],
}
export default config
