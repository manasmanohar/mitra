const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { travelPosts } = require('../models')

router.get('/', async (req, res) => {
    const listOfTravelPosts = await travelPosts.findAll()
    res.json(listOfTravelPosts)
})

router.post('/addtravelpost', async (req, res) => {
    const {
        userId,
        title,
        description,
        destination,
        noParticipants,
        modeOfTravel,
        currentLocation,
        travelMode,
        dateOfTravel,
        timeOfTravel,
    } = req.body

    try {
        const newpost = await travelPosts.create({
            userId,
            title,
            description,
            destination,
            noParticipants,
            modeOfTravel,
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
