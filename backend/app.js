const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dontenv = require('dotenv')
const PORT = process.env.PORT

require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//     if (err) throw err

//     console.log('The solution is: ', rows[0].solution)
// })

// connection.end()
