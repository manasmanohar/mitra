const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const { Op } = require('sequelize')

const cors = require('cors')
router.use(cors())

const { travelPosts } = require('../models')

router.post('/', async (req, res) => {
    const { userId } = req.body
    console.log(userId)

    try {
        const listOfTravelPosts = await travelPosts.findAll({
            where: {
                userId: {
                    [Op.ne]: userId,
                },
            },
        })
        return res.json(listOfTravelPosts)
    } catch (err) {
        console.log(err)
    }
    console.log(listOfTravelPosts)
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
