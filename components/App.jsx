import React from 'react'

export default class App extends React.Component {

    _onClick() {
        alert('click button');
    }

    render() {
        return (
            <html>

            <head>

                <title>Index pagina</title>
                <link rel="stylesheet" href="/style.css"/>

            </head>

            <body>

                <div>
                    <h1>Index page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    
                    <button onClick={this._onClick}>Click me</button>
                    
                    <img src="/assets/fullbackground.jpg" />
                </div>
    
                <script src="./bundle.js"/>

            </body>

            </html>
        )
    }
}