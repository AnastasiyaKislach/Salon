const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: true,
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './build',
    open: false
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      }
    ]
  }
});
