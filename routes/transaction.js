const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

const cors = require('cors');
router.use(cors());
router.use(express.json());

//this is the way to use controller, but for now leave it
const { addNewTransaction } = require("../controllers/transaction");

//get all transaction list from mongo db
router.route("/").get((req, res) => {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json(`Error:${err}`));
});

//add new transaction
router.route("/add").post(addNewTransaction);

module.exports = router;
