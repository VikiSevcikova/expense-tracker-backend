const Transaction = require("../models/Transaction");
const User = require("../models/User");

/* get all transaction */
exports.getAllTransaction = (req, res) => {
  Transaction.find({userId: req.user._id})
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json(`Error:${err}`));
};

/* add new transaction */
exports.addNewTransaction = async (req, res) => {
  try{
    const user = await User.findById(req.user._id);

    const userId = user._id;
    const date = Date.parse(req.body.date);
    const categoryId = req.body.categoryId;
    const categoryName = req.body.categoryName;
    const transactionType = req.body.transactionType;
    const description = req.body.description;
    const currency = req.body.currency;
    const amount = Number(req.body.amount);
    const paymentMethod = req.body.paymentMethod;
    const isDeleted = req.body.isDeleted;
    const isEditing = req.body.isEditing;

    //save to db
    const newTransaction = new Transaction({
      userId,
      date,
      categoryId,
      categoryName,
      transactionType,
      description,
      currency,
      amount,
      paymentMethod,
      isDeleted,
      isEditing
    });
    newTransaction.save()
      .then(transaction => res.json(transaction))
      .catch(err => {console.log(err); return res.status(400).json(`Error: Failed to add a new transaction ${err}`)});
  }catch(error){
    return res.status(500).json(`Error: Sorry, there is an issues on the server.`);
  }
};

/* update transaction */
exports.updateTransaction = (req, res) => {
  Transaction.findOne({_id: req.params.id, userId: req.user._id})
    .then(transaction => {
      transaction.date = Date.parse(req.body.date);
      transaction.categoryId = req.body.categoryId;
      transaction.categoryName = req.body.categoryName;
      transaction.transactionType = req.body.transactionType;
      transaction.description = req.body.description;
      transaction.currency = req.body.currency;
      transaction.amount = Number(req.body.amount);
      transaction.paymentMethod = req.body.paymentMethod;
      transaction.isDeleted = req.body.isDeleted;
      transaction.isEditing = req.body.isEditing;

      transaction.save()
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json(`Error: Failed to update the transaction ${err}`));
    })
    .catch(err => res.status(400).json(`Error: Transaction not found ${err}`));
};

/* delete transaction */
exports.deleteTransaction = (req, res) => {
  Transaction.findOneAndDelete({_id: req.params.id, userId: req.user._id})
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json(`Error: Failed to delete the transaction ${err}`));
};