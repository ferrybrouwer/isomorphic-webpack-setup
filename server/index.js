require('babel-register')({
	presets: ['react', 'es2015']
})

const server = require('./server')

module.exports = server