const Sequelize = require('sequelize')
const database = require('../database')


const QuizScore = database.define('quizScore', {
    //id, category, score, QuizDate

    id : {
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true,
        validate: {
            notEmpty: true
        }
    },

    category: {
        type: Sequelize.TEXT,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },
    QuizDate: {
        type: Sequelize.DATE,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },
})

module.exports = QuizScore