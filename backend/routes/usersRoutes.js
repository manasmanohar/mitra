const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

const { Users } = require('../models')

//get all users
router.get('/', async (req, res) => {
    try {
        const listOfUsers = await Users.findAll()
        res.json(listOfUsers)
        console.log(listOfUsers)
    } catch (err) {
        console.log(err)
    }
})

//check if user exists
router.get('/verifyuser', async (req, res) => {
    // const { userId, phone, name, email } = req.body
    // console.log(name)

    // try {
    //     const userExists = await Users.findAll({
    //         where: {
    //             userId,
    //         },
    //     })
    // } catch (err) {
    //     console.log(err)
    // }

    const { user } = req.body

    try {
        const dVerifyUser = await Users.findAll({
            where: {
                userId: user,
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

// create new user

router.post('/registeruser', async (req, res) => {
    const { userId, userName, picture, email, number } = req.body

    try {
        const newUser = await Users.create({
            userId: userId,
            userName: userName,
            picture: picture,
            email: email,
            phone: number,
        })
        return res.json(newUser)
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
