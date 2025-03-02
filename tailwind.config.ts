import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      screens: {
        celular: { max: '480px' },
      },
      colors: {
        // Light Mode
        text: '#040316',
        background: '#E2E8F0',
        primary: '#8418dc',
        secondary: '#260529',
        accent: '#7353df',

        // Dark Mode
        dtext: '#eae9fc',
        dbackground: '#010104',
        dprimary: '#8e23e7',
        dsecondary: '#f7d6fa',
        daccent: '#4020ac',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
