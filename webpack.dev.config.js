const path              = require('path')
const appConfig         = require('./app.config')
const loaders           = require('./webpack.loaders')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extraCSS = new ExtractTextPlugin({
    allChunks: true,
    filename:  path.resolve(__dirname, 'public/style.css'),
    disable:   true
})

module.exports = {
    devtool:   'sourcemap',
    entry:     [
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'client.js')
    ],
    output:    {
        path:     path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:    {
        rules: [
            ...loaders,
            {
                test:    /\.scss$/,
                exclude: /node_modules/,
                use:     extraCSS.extract({
                    fallback: 'style-loader',
                    use:      'css-loader!postcss-loader?sourceMap!sass-loader?sourceMap'
                })
            },
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                use:     [
                    'react-hot-loader',
                    'babel-loader'
                ]
            }
        ]
    },
    devServer: {
        host:   '0.0.0.0',
        port:   9292,
        hot:    true,
        inline: true,
        noInfo: true,
        proxy:  {
            '**': {
                target: `http://${appConfig.HOST}:${appConfig.PORT}`,
                secure: false
            }
        }
    },
    plugins:   [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        extraCSS
    ]
}