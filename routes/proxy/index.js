const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const stockController = require('./stock.controller');
const usersController = require('./user.controller');

// stock
router.get('/stock', stockController.output.getPAD)

// users
router.get('/allUser', usersController.output.getAllUsers)
router.post('/join', usersController.process.join)

module.exports = router;