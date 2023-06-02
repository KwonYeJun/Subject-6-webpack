const path = require('path');

module.exports = {

  entry: './test.ts',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename : 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'bundle'),
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['bable-loader','ts-loader']
      }
    ]
  }
  

}
