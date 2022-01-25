const db = require('./database')
const User = require('./models/user')
const QuizScore = require('./models/quizScore')


//associations

User.hasMany(QuizScore)
QuizScore.belongsTo(User, {
    foreignKey: {
        allowNull:false
    }
})

module.exports = {
    db,
    User,
    QuizScore
}