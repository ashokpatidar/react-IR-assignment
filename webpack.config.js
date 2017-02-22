var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js')
  },
  module: {
    rules: [
      {
      	test: /\.(js|jsx)$/, 
      	use: [
	      	{ 
	      		loader: 'babel-loader',
	      		options: {
	      			presets: ['es2015', 'react']
	      		}
	      	}
      	]

      }
    ]
  }
};