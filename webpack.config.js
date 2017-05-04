const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./app/index.js', './app/styles.sass'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(['css-loader','postcss-loader', 'sass-loader'])}
        ]  
    },
    plugins: [ 
        new HTMLWebpackPlugin({
            template: 'app/index.html'
        }),
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
    }),
  ]
}