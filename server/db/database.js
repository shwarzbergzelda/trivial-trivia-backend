const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const db = new Sequelize('df1ooahjunh5bu', 'uqnzshnvnsgzgb', '961536bc407072d898f8012e13a121aa8b9746f1beb567e7f2b3e6ec27680273', {
    host: 'ec2-34-194-171-47.compute-1.amazonaws.com',
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
    }
  })

  db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db