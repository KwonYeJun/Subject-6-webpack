const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  entry: './test.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: './bundle',
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './bundle/index.html',
    }),
  ],

}
