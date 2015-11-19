'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /.*\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel']
      }
    ]
  }
};
