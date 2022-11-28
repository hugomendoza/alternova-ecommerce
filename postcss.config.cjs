module.exports = {
  plugins: [
    require('postcss-nested'),
    require('@tailwindcss/nesting'),
    require("tailwindcss")("./tailwind.config.cjs"),
    require("autoprefixer")
    
  ],
}
