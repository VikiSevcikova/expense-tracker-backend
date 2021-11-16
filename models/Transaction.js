const mongoose = require('mongoose');

//define schema
const TransactionSchema = new mongoose.Schema({
  id: String,
  date: {
    type: Date,
    default: Date.now
  },
  categoryId: Number,
  transactionType: String,
  description: String,
  currency: String,
  amount: Number,
  paymentMethod: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
});

//export
const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;

/* Data Structure Note */
// id: xxxxxx
// date:11/01/2021
// categoryId: 1,
// transactionType:"expense",
// description:”Ramen”,
// currency: CAD,
// amount: 20,
// paymentMethod: “credit card”,
// isDeleted: false,