// Dependencies
const express = require('express')
const path = require('path')

// Creating a router instance
const router = express.Router()

// A route to display the home page
router.get('/', function (req, res) {
    res.sendFile(path.resolve('app', 'public', 'home.html'))
})

// A route to display the survey page
router.get('/survey', function (req, res) {
    res.sendFile(path.resolve('app', 'public', 'survey.html'))
})

module.exports = router