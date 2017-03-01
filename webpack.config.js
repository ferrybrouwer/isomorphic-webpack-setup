const path = require('path')
const appConfig = require('./app.config')
const loaders = require('./webpack.loaders')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const production = process.env.NODE_ENV === 'production'
const development = process.env.NODE_ENV === 'development'

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: false
});

let entry  = [
	'./sass/style.scss',
	'./client.js'
]

let plugins = [
	extractSass
]

// when is development mode add some additional settings
if (development) {
	plugins.push(new webpack.HotModuleReplacementPlugin())
	entry = [
		`webpack-dev-server/client?http://${appConfig.HOST}:${appConfig.PORT}`,
		'webpack/hot/only-dev-server'
	].concat(entry)
}

module.exports = {
	name: 'public-files',
	entry,
	plugins,
	devtool: 'source-map',
	
	output: {
		publicPath: '/',
		path: path.resolve('public'),
		filename: 'bundle.js'
	},

	devServer: {
		port: 9000,
		hot: true,
		inline: true,
		historyApiFallback: false,
		compress: true,
		contentBase: path.resolve(__dirname, 'public'),
		stats: { colors: true },
		proxy: {
			'/api': {
				target: {
					host: appConfig.HOST,
					port: appConfig.PORT,
					protocol: 'http:'
				},
				ignorePath: true,
      	changeOrigin: true,
      	secure: false
			}
		}
	},

	module: {
		rules: [
			...loaders,
			{
        test: /\.scss$/,
        use: extractSass.extract({
            use: [
            	{loader: 'css-loader', options:{sourceMap: true}}, 
            	{loader: 'sass-loader', options: {sourceMap: true}}
            ],
            fallback: 'style-loader'
        })
      }
		]
	}
}