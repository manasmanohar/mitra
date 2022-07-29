const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'root', 'manasmitra@098', {
    host: 'localhost',
    dialect: 'mysql',
})

const { travelposts } = require('../models')
// const { Users } = require('../models')

router.post('/', async (req, res) => {
    const { userId } = req.body
    console.log(`userId:${userId}`)

    // console.log(`currentLocation:${currentLocation}`)

    try {
        const listofMessages = await sequelize.query(
            'SELECT "Users.userId", "Users.picture", "Users.phone", "travelposts.title" ,"travelposts.description" FROM Users  JOIN travelposts ON Users.userId = travelposts.userId AND Users.user_id != userId'
        )
        console.log('ji')
        res.send(listofMessages)
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
// localhost/messages  should get the users posts from travelpost table, where userid of row= current current user, and get the name,picture,phonenum of the user who is present as value  inside the travelpost userQueue column

module.exports = router
