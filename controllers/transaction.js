const Transaction = require("../models/Transaction");

exports.addNewTransaction = (req, res) => {
  console.log("I am in transaction controller");
  console.log(req.body);
  
    //const newTransaction = new Transaction()
  // newTransaction.save()
  //   .then(() => res.json("transaction added"))
  //   .catch(err => res.status(400).json(`Error:${err}`));
};