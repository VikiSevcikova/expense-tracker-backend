const Transaction = require("../models/Transaction");
const express = require('express')
const app = express()
app.use(express.json());

exports.getAllTransaction = (req, res, next) => {
  Transaction.find()
    .sort({ date: 1 })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error:${err}`));
};

exports.getRecentTransaction = (req, res, next) => {
  // get limit 5 items for recent transactions
  Transaction.find()
    .sort({ date: -1 })
    .limit(5)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error:${err}`));
};

exports.getTranscationByDate = (req, res, next) => {
 
    console.log(req.params)
    const startDate = req.body.startdate
    const endDate = req.body.enddate
  Transaction.find({
    date: {
        // gte = Greater Than of Equal
        // 2021-11-15
      $gte: startDate,
       // lte = Lesser Than of Equal
       // 2021-11-17
      $lte: endDate,
    },
  })
    .sort({ date: 1 })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error:${err}`));
};
