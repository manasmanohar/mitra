const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const cors = require('cors')
router.use(cors())

const { travelPosts } = require('../models')
const sequelize = new Sequelize('test', 'root', 'manasmitra@098', {
    host: 'localhost',
    dialect: 'mysql',
})
// const { Op } = require('sequelize')

const { Users } = require('../models/Users')

router.post('/', async (req, res) => {
    const { userId } = req.body
    //, currentLocation
    console.log(`userId:${userId}`)
    // console.log(`currentLocation:${currentLocation}`)

    try {
        let sql = `SELECT DISTINCT Users.userId, Users.picture, Users.phone, travelposts.title ,travelposts.description FROM Users JOIN travelposts ON Users.userId = travelposts.userId AND Users.userId != ${userId}`
        console.log(sql)
        const listOfTravelposts = await sequelize.query(sql)
        res.json(listOfTravelposts)
    } catch (err) {
        console.log(err)
    }
})

router.post('/joinpost', async (req, res) => {
    const { userId, title } = req.body
    console.log(`userId:${userId}`)
    console.log(`title:${title}`)

    try {
        const updatedPost = await sequelize.query(
            'UPDATE travelposts SET "travelposts.userQueue" = "userId" WHERE "travelposts.title" = "title"'
        )
        res.json(updatedPost)
        // console.log(updatedPost)
    } catch (err) {
        console.log(err)
    }
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
    console.log(req.body)

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
