import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import IndexComponent from './../components/IndexComponent.jsx'
import appConfig from './../app.config'

// create app
const app = express()

// set public as root
app.use(express.static('public'))

// set headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://0.0.0.0:9292')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// route to root
app.get('/', (req, res) => {
    const html = ReactDOMServer.renderToString(<IndexComponent />)
    res.send(html)
})

// listen to host:port and notify stdout
app.listen(appConfig.PORT, appConfig.HOST, () => {
    console.log(`> Server started at http://${appConfig.HOST}:${appConfig.PORT}`)
})

