require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dontenv = require('dotenv')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.json())

const db = require('./models')

const travelPostsRouter = require('./routes/travelRoutes')
app.use('/travelposts', travelPostsRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})
