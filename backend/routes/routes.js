const express = require('express')
const app = express()
const router = Router()

const usersRoute = require('./routes/users')
const postRoute = require('./routes/posts')

app.use('/users', usersRoute)

router.get('/', (req, res) => {
    res.send('testing')
})

module.expots = router
