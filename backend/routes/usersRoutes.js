const express = require('express')
const router = express.Router()
const { Users } = require('../models')

//get all users
router.get('/', async (req, res) => {
    try {
        console.log(req.body)
        const listOfUsers = await Users.findAll()
        res.json(listOfUsers)
        console.log(listOfUsers)
    } catch (err) {
        console.log(err)
    }
})

//check if user exists
router.post('/checkifuserexists', async (req, res) => {
    const { userId } = req.body
    console.log(req.body)

    try {
        const dVerifyUser = await Users.findOne({
            where: {
                userId: userId,
            },
        })
        if (dVerifyUser) {
            return res.json(dVerifyUser)
        } else {
            res.json('not exists')
        }
    } catch (err) {
        console.log('err in response')

        console.log(err)
    }
})

// create new user

router.post('/registeruser', async (req, res) => {
    console.log(req.body)
    const { user_id, user_name, user_picture, user_email, user_number } =
        req.body
    console.log(user_id)

    try {
        const user = await Users.create({
            userId: user_id,
            userName: user_name,
            picture: user_picture,
            email: user_email,
            phone: user_number,
        })
        return res.json(user)
    } catch (err) {
        console.log(err)
    }
})

// check if user exists
// try {
//     const dVerifyUser = await Users.findAll({
//         where: {
//             user_id: userId,
//         },
//     })
//     if (dVerifyUser) {
//         return res.json(dVerifyUser)
//     } else {
//         return res(404)
//     }
// } catch (err) {
//     console.log(err)
// }
// router.post('/', async (req, res) => {
//     const { userId } = req.body

//     try {
//         const dVerifyUser = await Users.findAll({
//             where: {
//                 user_id: userId,
//             },
//         })
//         if (dVerifyUser) {
//             return res.json(dVerifyUser)
//         } else {
//             return res(404)
//         }
//     } catch (err) {
//         console.log(err)
//     }
// })

module.exports = router
