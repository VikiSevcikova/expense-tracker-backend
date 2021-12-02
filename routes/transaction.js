const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

const { addNewTransaction, getAllTransaction, updateTransaction, deleteTransaction } = require("../controllers/transaction");
const { protect } = require("../middleware/auth");

//get all transaction list from mongo db
router.route("/all").get(protect, getAllTransaction);

//add new transaction
router.route("/add").post(protect, addNewTransaction);

//update 
router.route("/update/:id").post(protect, updateTransaction);

//delete
router.route("/delete/:id").delete(protect, deleteTransaction);

module.exports = router;
