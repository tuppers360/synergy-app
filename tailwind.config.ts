import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobackground: "url('https://source.unsplash.com/-uHVRvDr7pg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          '50': '#fffbe6',
          '100': '#fff7cc',
          '200': '#ffee99',
          '300': '#ffe666',
          '400': '#ffdd33',
          '500': '#ffd500',
          '600': '#ccaa00',
          '700': '#998000',
          '800': '#665500',
          '900': '#332b00',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
