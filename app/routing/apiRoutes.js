// Dependencies
const express = require('express')
const path = require('path')

// Creating a router instance
const router = express.Router()

const friendData = require('../data/friends')

router.get('/api/friends', function (req, res) {
    res.json(friendData)
})

router.post('/api/friends', function (req, res) {
    friendData.push(req.body)
    console.log(req.body)
    res.json(friendData)
})

module.exports = router