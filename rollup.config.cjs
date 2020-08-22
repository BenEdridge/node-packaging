// rollup.config.cjs

const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: './app.js',
  output: [
    {
      file: './dist/app.bundle-rollup.js',
      format: 'cjs'
    },
    {
      file: './dist/app.bundle-rollup.terser.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    },
  ],
  plugins: [json()]
};