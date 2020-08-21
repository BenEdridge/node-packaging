const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    filename: './app.bundle.js'
  },
  target: 'node',
  mode: 'production',
  // externals: [nodeExternals()]
}
