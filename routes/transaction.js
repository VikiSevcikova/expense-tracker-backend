const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

const { addNewTransaction, getAllTransaction, updateTransaction, deleteTransaction } = require("../controllers/transaction");

//get all transaction list from mongo db
router.route("/all").get(getAllTransaction);

//add new transaction
router.route("/add").post(addNewTransaction);

//update 
router.route("/update/:id").post(deleteTransaction);

//delete
router.route("/:id").delete(deleteTransaction);

module.exports = router;
