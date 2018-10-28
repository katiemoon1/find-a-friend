// Dependencies
const express = require('express')
const path = require('path')
const api = require('./app/routing/apiRoutes')
const html = require('./app/routing/htmlRoutes')

const app = express()
// Set up the port for the project, allowing heroku to select the port when it is deployed
var PORT = process.env.PORT || 3030

app.use(api)
app.use(html)
// Setting up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Starts the server
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT)
})