// Dependencies
const express = require('express')
const path = require('path')

// Creating a router instance
const router = express.Router()

// Defining friend data as a variable
const friendData = require('../data/friends')

// Getting the friend data
router.get('/api/friends', function (req, res) {
    res.json(friendData)
})

// Posting the friend data to the modal
router.post('/api/friends', function (req, res) {
    
    let newFriend = req.body
    let newScores = newFriend.scores
    let scoresArray = []
    let newMatch = 0

    // A for loop that runs through all of the friends currently in the database
    for (var i = 0; i < friendData.length; i++) {
        let scoreDiff = 0

        // Another for loop that runs through all of the current friend scores
        for (var j = 0; j < newScores.length; j++) {
            scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newScores[j])))
        }
        // Pushing the scoreDiff to the scoresArray
        scoresArray.push(scoreDiff)
    }

    // Creating another for loop to run through the scoresArray to find the bestMatch
    for (var i = 0; i < scoresArray.length; i++) {
        if (scoresArray[i] <= scoresArray[newMatch]) {
            newMatch = i
        }
    }

    // Defining the newBestFriend
    let newBestFriend = friendData[newMatch]
    console.log(newBestFriend)
    res.json(newBestFriend)

    friendData.push(newFriend)
})

module.exports = router