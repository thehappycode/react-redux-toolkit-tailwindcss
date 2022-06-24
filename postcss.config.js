const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [
    tailwindcss('./src/assets/css/tailwind.config.js'),
    require('autoprefixer')
  ],
}
