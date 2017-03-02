const path              = require('path')
const loaders           = require('./webpack.loaders')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extraCSS = new ExtractTextPlugin({
    allChunks: true,
    filename:  'style.css',
    disable:   false
})

module.exports = {
    devtool: 'sourcemap',

    entry: './client.js',

    output: {
        publicPath: '/',
        path:       path.resolve('public'),
        filename:   'bundle.js'
    },

    module: {
        rules: [
            ...loaders,
            {
                test:    /\.scss$/,
                exclude: /node_modules/,
                use:     extraCSS.extract({
                    fallback: 'style-loader',
                    use:      'css-loader!postcss-loader!sass-loader'
                })
            },
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                use:     'babel-loader'
            }
        ]
    },

    plugins: [
        extraCSS
    ],
}