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

router.put('/', async(req, res) => {
    try {
        const updateQuizScore = await QuizScore.update(req.body, { 
            where : { id : req.body.id },
            returning : true 
        });
        res.status(200).json({
            newData: updateQuizScore[1][0].dataValues
        })
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const inputid = req.params.id;
        QuizScore.destroy({ where : { id : inputid } });
        res.status(200).json({
            outcome: `Deleted QuizScore with id ${inputid}.`
        })
    } catch (error) {
        res.send(error.message)
    }
})



module.exports = router