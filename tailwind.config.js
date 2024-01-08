/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.hbs', './**/*.hbs'],
  theme: {
    extend: {
      backgroundImage: {
      'hero-copy-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
      'secondary-gradient': "linear-gradient(180deg,rgb(55, 102, 173) 0%,var(--color-brand-rich) 100%);",
      },
    },
  },
  plugins: [],
};
