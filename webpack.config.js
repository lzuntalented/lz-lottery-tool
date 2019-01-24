const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'bound.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // loader: 'babel-loader!react-loader'
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  mode: 'production',
};
