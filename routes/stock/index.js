const express = require('express');
const router = express.Router();

const stockController = require('./stock.controller');

router.get('/stock', stockController.getPAD)

module.exports = router;