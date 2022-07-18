const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { Users } = require('../models')

router.get('/', async (req, res) => {
    try {
        const listOfUsers = await Users.findAll()
        res.json(listOfUsers)
        console.log(listOfUsers)
    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    const { userId } = req.body

    try {
        const dVerifyUser = await Users.findAll({
            where: {
                user_id: userId,
            },
        })
        if (dVerifyUser) {
            return res.json(dVerifyUser)
        } else {
            return res(404)
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
