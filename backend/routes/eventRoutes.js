const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { eventPosts } = require('../models')

router.get('/eventRoute', async (req, res) => {
    const listOfEventPosts = await eventPosts.findAll()
    res.json(listOfEventPosts)
})

router.post('/eventRoutes', async (req, res) => {
    const {
        userId,
        title,
        destination,
        noParticipants,
        currentLocation,
        eventMode,
        dateOfEvent,
        timeOfTravel,
    } = req.body

    try {
        const newpost = await eventPosts.create({
            userId,
            title,
            destination,
            noParticipants,
            currentLocation,
            eventMode,
            dateOfEvent,
            timeOfTravel,
        })
        return res.json(newpost)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
