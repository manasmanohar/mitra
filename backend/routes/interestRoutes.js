const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { userInterests } = require('../models')

router.get('/userInterestsRoute', async (req, res) => {
    const listOfInterests = await userInterests.findAll()
    res.json(listOfInterests)
})

router.post('/userInterestsRoute', async (req, res) => {
    const { userId, intrests } = req.body

    try {
        const newpost = await userInterests.create({
            userId,
            intrests,
        })
        return res.json(newpost)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
