const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

const { addNewTransaction, getAllTransaction, updateTransaction, deleteTransaction } = require("../controllers/transaction");

//get all transaction list from mongo db
router.route("/all").get(getAllTransaction);

//add new transaction
router.route("/add").post(addNewTransaction);

//update 
router.route("/update/:id").post(updateTransaction);

//delete
router.route("/delete/:id").delete(deleteTransaction);

module.exports = router;
