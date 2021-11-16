const Transaction = require("../models/Transaction");

/* get all transaction */
exports.getAllTransaction = (req, res) => {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json(`Error:${err}`));
};

/* add new transaction */
exports.addNewTransaction = (req, res) => {
  console.log(req.body);

  const date = Date.parse(req.body.date);
  const categoryId = req.body.categoryId;
  const categoryName = req.body.categoryName;
  const transactionType = req.body.transactionType;
  const description = req.body.description;
  const currency = req.body.currency;
  const amount = Number(req.body.amount);
  const paymentMethod = req.body.paymentMethod;
  const isDeleted = req.body.isDeleted;

  //save to db
  const newTransaction = new Transaction({
    date,
    categoryId,
    categoryName,
    transactionType,
    description,
    currency,
    amount,
    paymentMethod,
    isDeleted
  });
  newTransaction.save()
    .then(transaction => res.json("a new transaction added!", transaction))
    .catch(err => res.status(400).json(`Error: Failed to add a new transaction ${err}`));
};

/* update transaction */
exports.updateTransaction = (req, res) => {
  Transaction.findById(req.params.id)
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

      transaction.save()
        .then(transaction => res.json("a new transaction updated!", transaction))
        .catch(err => res.status(400).json(`Error: Failed to update the transaction ${err}`));
    })
    .catch(err => res.status(400).json(`Error: transaction not found ${err}`));
};

/* delete transaction */
exports.deleteTransaction = (req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(transaction => res.json("transaction deleted", transaction))
    .catch(err => res.status(400).json(`Error: Failed to delete the transaction ${err}`));
};

//////////// req.body sample
// {
//   id: '6fecbcc-cf33-568c-50ee-dc81d740135', --> mongoose will create a new one automatically so this might not be needed
//   date: '2021-11-16T21:51:40.493Z',
//   categoryId: 0,
//   categoryName: 'Food & Beverage',
//   transactionType: 'expense',
//   description: 'grocery',
//   currency: 'CAD',
//   amount: '100',
//   paymentMethod: 'Credit Card',
//   isDeleted: false
// }