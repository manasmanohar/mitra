// require('dotenv').config()
// const bodyParser = require('body-parser')
// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
// const dontenv = require('dotenv')

// const PORT = process.env.PORT

// const app = express()
// // app.use(bodyParser.json())
// app.use(cors())
// // app.use(express.json())
// app.use(morgan('combined'))
// // app.use(express.urlencoded({ extended: false }))

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

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

const UsersVerifyRouter = require('./routes/usersRoutes')
app.use('/users', UsersVerifyRouter)

const helpPostRouter = require('./routes/helpRoutes')
app.use('/helpposts', helpPostRouter)

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})
