const Transaction = require("../models/Transaction");

exports.getRecentTransaction = (req, res, next) => {
    // get limit 5 items for recent transactions
  Transaction.find()
  .sort({'date': -1})
  .limit(5)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(`Error:${err}`));
};
