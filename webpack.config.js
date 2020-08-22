// const nodeExternals = require('webpack-node-externals');
const ClosurePlugin = require('closure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const pluginOpts = {
  include: 'node_modules',
  comments: false,
};

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    filename: './app.bundle-webpack.js'
  },
  optimization: {
    minimize: true,
    moduleIds: 'size',
    nodeEnv: 'production'
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({})
  //   ],
  // },
  // plugins: [
  //   new MinifyPlugin({}, pluginOpts)
  // ],
  target: 'node',
  mode: 'production',
  // externals: [nodeExternals()]
}
