const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { travelPosts } = require('../models')

router.get('/', async (req, res) => {
    const listOfTravelPosts = await travelPosts.findAll()
    res.json(listOfTravelPosts)
})

router.post('/travelPostsRoute', async (req, res) => {
    const {
        userId,
        title,
        destination,
        noParticipants,
        currentLocation,
        travelMode,
        dateOfTravel,
        timeOfTravel,
    } = req.body

    try {
        const newpost = await travelPosts.create({
            userId,
            title,
            destination,
            noParticipants,
            currentLocation,
            travelMode,
            dateOfTravel,
            timeOfTravel,
        })
        return res.json(newpost)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
