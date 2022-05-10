const { Sequelize, DataTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const User = require('./user');

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User(sequelize, DataTypes);

module.exports = db;
