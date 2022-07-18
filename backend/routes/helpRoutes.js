const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { helpPosts } = require('../models')

router.get('/', async (req, res) => {
    const listOfHelpPosts = await helpPosts.findAll()
    res.json(listOfHelpRoutes)
})

router.post('/helpPostsRoutes', async (req, res) => {
    const {
        userId,
        title,
        destination,
        currentLocation,
        dateOfEvent,
        timeOfEvent,
    } = req.body

    try {
        const newpost = await helpPosts.create({
            userId,
            title,
            destination,
            currentLocation,
            dateOfEvent,
            timeOfEvent,
        })
        return res.json(newpost)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
