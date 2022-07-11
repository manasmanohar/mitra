require('dotenv').config()
const express = require('express')
// const mysql = require('mysql2')
const cors = require('cors')
const dontenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const router = express.router
// const { sequelize } = require('./models')
const PORT = process.env.PORT

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const db = require('./models')

const travelPostsRouter = require('./routes/travelRoutes')
app.use('/travelposts', travelPostsRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})
