const Sequelize = require("sequelize");
const crypto = require("crypto");
const database = require("../database");

const User = database.define("user", {
  //userName, password, bestCategory, lastSeen

  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },

  password: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  // salt: {
  //   type: Sequelize.STRING,
  //   get() {
  //     return () => this.getDataValue("salt");
  //   },
  // },

  // googleId: {
  //   type: Sequelize.STRING,
  // },

  bestCategory: {
    type: Sequelize.TEXT,
    defaultValue: "No test taken yet",
  },

  bestScore: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  lastSeen: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

// User.generateSalt = function () {
//   return crypto.randomBytes(16).toString("base64");
// };

// User.encryptPassword = function (plainText, salt) {
//   return crypto
//     .createHash("RSA-SHA256")
//     .update(plainText)
//     .update(salt)
//     .digest("hex");
// };

// User.prototype.correctPassword = function (candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password();
// };

// const setSaltAndPassword = (user) => {
//   if (user.changed("password")) {
//     user.salt = User.generateSalt();
//     user.password = User.encryptPassword(user.password(), user.salt());
//   }
// };

// User.beforeCreate(setSaltAndPassword);
// User.beforeUpdate(setSaltAndPassword);

module.exports = User;
