/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // WILL BE ADJUSTED
        'base-small': 'clamp(0.821rem, 0.3071rem + 0.4647vi, 0.8943rem)',
        'base': 'clamp(0.9rem, 0.9rem + 0.07vw, 1.05rem)',
        'base-large': 'clamp(1.1rem, 0.7071rem + 0.5143vi, 1.4rem)',
        // 'heading-6': 'clamp(1rem, 0.928rem + 0.36vw, 1.25rem)',
        'heading-5': 'clamp(1.2rem, 1rem + 0.45vw, 1.57rem)',
        'heading-4': 'clamp(1.2rem, 0.9rem + 0.5vw, 1.5rem)',
        'heading-3': 'clamp(1.5625rem, 1.2474rem + 1.5755vi, 2.6653rem)',
        'heading-2': 'clamp(3rem, 1.496rem + 2.2854vi, 3.5529rem)',
        'heading-1': 'clamp(4.688rem, 2.25rem + 1vw, 4.6875rem)',
        // 'heading-display': 'clamp(2.6518rem, 1.88rem + 3.459vi, 7.3131rem)',
        // 'heading-expertise': 'clamp(3.1518rem, 1.88rem + 5.459vi, 9.3131rem)',
        // 'heading-number': 'clamp(1.6518rem, 2.034rem + 7.959vi, 8.3131rem)',
      },
      spacing: {
        '3xs': 'clamp(0.3125rem, 0.3125rem + 0vi, 0.3125rem)',
        '2xs': 'clamp(0.5625rem, 0.5446rem + 0.0893vi, 0.625rem)',
        'xs': 'clamp(0.875rem, 0.8571rem + 0.0893vi, 0.9375rem)',
        'sm': 'clamp(1.125rem, 1.0893rem + 0.1786vi, 1.25rem)',
        'md': 'clamp(1.6875rem, 1.6339rem + 0.2679vi, 1.875rem)',
        'lg': 'clamp(2.25rem, 2.1786rem + 0.3571vi, 2.5rem)',
        'xl': 'clamp(3.375rem, 3.2679rem + 0.5357vi, 3.75rem)',
        '2xl': 'clamp(4.5rem, 4.3571rem + 0.7143vi, 5rem)',
        '3xl': 'clamp(5.75rem, 6.2571rem + 1.2023vi, 7.25rem)',
      },
      colors: {
        white: 'rgb(255 255 255 / var(--tw-text-opacity))',
        black: 'rgb(0 0 0 / var(--tw-text-opacity))',
        primary: 'rgb(19 26 27 / var(--tw-text-opacity))',
        secondary: 'rgb(32 59 64 / var(--tw-text-opacity))',
        tertiary: 'rgb(231 243 243 / var(--tw-text-opacity))',
        quaternary: 'rgb(250 247 240 / var(--tw-text-opacity))',
        fifth: 'rgb(203 243 110 / var(--tw-text-opacity))',
      },
      fontFamily: {
        title: 'var(--title)',
        body: 'var(--body)',
        'body-bold': 'var(--body-bold)',
        'body-medium': 'var(--body-medium)',
        'body-medium-italic': 'var(--body-medium-italic)',
      },
    },
  },
  plugins: [],
};

