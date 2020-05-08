const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function() {
                // postcss plugins, can be exported to postcss.config.js
                return [require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/static/images'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ttc)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/static/fonts'
        }
      }
    ]
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, '../src'),
      //modules: path.resolve(__dirname, '../src/modules')
    },
    modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')]
  }
};
