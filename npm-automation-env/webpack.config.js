const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Lodash = require('lodash');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.min.js'
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }, {
      test: /\.html$/i,
      loader: 'html-loader',
    }, {
      test: /(\.tpl\.html)$/,
      loader: 'lodash-template-module-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.min.css',
    }),
  ]
}