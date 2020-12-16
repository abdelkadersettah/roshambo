const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: './docs',
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Here you should change 'env' to '@babel/preset-env'
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
