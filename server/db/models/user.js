const Sequelize = require('sequelize')
const database = require('../database')

const User = database.define('user', {
    //userName, password, bestCategory, lastSeen

    userName: {
        type: Sequelize.STRING,
        allowNull : false,
        primaryKey : true,
        validate: {
            notEmpty: true
        }
    },

    password: {
        type: Sequelize.TEXT,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },

    bestCategory: {
        type: Sequelize.TEXT,
        defaultValue: "No test taken yet",
    },

    bestScore: {
        type: Sequelize.INTEGER,
        defaultValue : 0
    },

    lastSeen: {
        type: Sequelize.DATE,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },


})

module.exports = User