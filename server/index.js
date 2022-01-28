const express = require('express')
const morgan = require('morgan')
const { db } = require('./db')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// app.use('/api', require('./api/index'))

app.use('/quizscore', require('./api/quizScore'))
app.use('/user', require('./api/user'))
app.use('/getTTPquiz', require('./api/getTTPquiz'))

db.sync().then(() =>{
    console.log('db synced')
    app.listen(PORT, () =>
        console.log(`Serving portmanteau since there were ports ${PORT}`)
    )
})