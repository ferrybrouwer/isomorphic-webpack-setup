import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import IndexComponent from './../components/IndexComponent.jsx'
import appConfig from './../app.config'

// create app
const app = express()

// set public as root
app.use(express.static('public'))

// route to root
app.get('/', (req, res) => {
	const html = ReactDOMServer.renderToString(<IndexComponent />)
	res.send(html)
})

// listen to host:port and notify stdout
app.listen(appConfig.PORT, appConfig.HOST, () => {
	console.log(`> Server started at http://${appConfig.HOST}:${appConfig.PORT}`)
})