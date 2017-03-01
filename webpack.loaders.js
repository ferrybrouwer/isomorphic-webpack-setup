module.exports = [

	// .js/.jsx
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|public\/)/,
		loaders: ['react-hot-loader', 'babel-loader']
	},

	// font files
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		use: 'file-loader'
	},
	{
		test: /\.(woff|woff2)$/,
		exclude: /node_modules/,
		use: 'url-loader?prefix=font/&limit=5000'
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=application/octet-stream'
	},

	// svg files
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/svg+xml'
	},

	// images
	{
		test: /\.gif/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/gif'
	},
	{
		test: /\.jpg/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/jpg'
	},
	{
		test: /\.png/,
		exclude: /node_modules/,
		use: 'url-loader?limit=10000&mimetype=image/png'
	}
]