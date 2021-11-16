const createError = require('http-errors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const transactionRouter = require("./routes/transaction");

const errorHandler = require('./middleware/error');

const app = express();
dotenv.config();
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//specify router
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use("/alltransaction", transactionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(req);
  next(createError(404));
});

//Error Handler should be the last middleware
app.use(errorHandler);

module.exports = app;
