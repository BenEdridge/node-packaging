// const nodeExternals = require('webpack-node-externals');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    filename: './app.bundle.js'
  },
  optimization: {
    minimize: true,
    moduleIds: 'size',
    nodeEnv: 'production'
    // minimizer: [
    //   new ClosurePlugin({mode: 'STANDARD'}, {
    //     // compiler flags here
    //     //
    //     // for debugging help, try these:
    //     //
    //     // formatting: 'PRETTY_PRINT'
    //     // debug: true,
    //     // renaming: false
    //   })
    // ]
  },
  target: 'node',
  mode: 'production',
  // externals: [nodeExternals()]
}
