// rollup.config.cjs

//https://github.com/rollup/plugins/tree/master/packages/node-resolve#resolving-built-ins-like-fs

const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: './app.js',
  output: [
    {
      file: './dist/app.bundle-rollup.js',
      format: 'cjs',
    },
    {
      file: './dist/app.bundle-rollup.terser.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    },
  ],
  plugins: [nodeResolve(), commonjs(), json()]
};