module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  daisyui: {
    styled: true,
    themes: ['light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  plugins: [
    require('daisyui')
  ],
}
