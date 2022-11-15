/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/pages/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      height: {
        'halfscreen': '50hv'
      },
      spacing: {
        'halfscreen': '50hv'
      }
    }
  },
  plugins: [],
}
