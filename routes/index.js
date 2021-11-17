const express = require('express');
const router = express.Router();
const Transaction = require("../models/Transaction");

/* GET home page. */
router.get('/', function(req, res, next) {
  Transaction.find()
  .then(data => res.json(data))
  .catch(err => res.status(400).json(`Error:${err}`));
  // res.send('<h1>This is the index page.</h1>');
});

module.exports = router;
