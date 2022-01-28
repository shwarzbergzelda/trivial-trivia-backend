const router = require('express').Router()

const quiz = require('./TTPquiz.json')

router.get('/', async (req, res) => {
    try {
        res.status(200).send(quiz)
    } catch (error) {
        res.status(404).send(error.message)
    }
}) 

module.exports = router