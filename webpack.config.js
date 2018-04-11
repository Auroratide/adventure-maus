const path = require('path');

module.exports = {
  name: 'game',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'game.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [ {
      test: /\.ts$/,
      loader: ['ts-loader']
    } ]
  }
};
