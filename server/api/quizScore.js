const router = require('express').Router()
const User = require('../db/models/user')
const QuizScore = require('../db/models/quizScore')

router.get('/', async (req, res) => {
    try {
        const quizscores = await QuizScore.findAll()
        res.status(200).send(quizscores)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const quizscore = await QuizScore.findByPk(req.params.id)
        res.send(quizscore)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newQuizScore = await QuizScore.create(req.body)
        res.json(newQuizScore)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:category/getTopTen', async(req, res) => {
    try {
        const quizscores = await QuizScore.findAll({
            where: {category : req.params.category},
            limit : 10;
            order: 'score DESC'
        })
        res.status(200).send(quizscores)
    } catch (error) {
        res.status(404).send(error.message)
    }
}



module.exports = router