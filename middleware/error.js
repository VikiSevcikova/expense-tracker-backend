const ErrorResponse = require('../utils/errorResponse');

//err is always first
const errorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message = err.message;

    console.error(err);

    //11000 duplicate value
    if(err.code === 11000){
        const message = 'Duplicate Field Value Enter';
        error = new ErrorResponse(message, 400);
    }

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map((val)=> val.message);
        error = new ErrorResponse(message, 400);
    }

    //500 server error
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });
}

module.exports = errorHandler;