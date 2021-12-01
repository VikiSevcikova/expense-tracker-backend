const mongoose = require('mongoose');

//define schema
const TransactionSchema = new mongoose.Schema({
  //userId: String,
  date: Date,
  categoryId: Number,
  categoryName: String,
  transactionType: String,
  description: String,
  currency: String,
  amount: Number,
  paymentMethod: String,
  isDeleted: Boolean,
  isEditing: Boolean
});

//export
const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
