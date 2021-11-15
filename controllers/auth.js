const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req, res, next) => {
    console.log('register');
    const {username, email, password} = req.body;

    try{
        const user = await User.create({
            username, email, password,
        });

        sendToken(user, 201, res);
    }catch (error){
        next(error);
    }
}

exports.login = async (req, res, next) => {
    console.log("login");
    const {email, password} = req.body;

    if(!email || !password){
        // req.status(400).json({success: false, error: "Please provide email and password."});
        return next(new ErrorResponse("Please provide email and password.", 400));
    }

    try{
        //select("+password") means that we want also to return the password, because is schema we set select to false
        const user = await User.findOne({ email }).select("+password");
        if(!user){
            return next(new ErrorResponse("Invalid credentials.", 401));
        }
        //check if user password matches with the password from req.body
        const isMatched = await user.matchPasswords(password);
        if(!isMatched){
            return next(new ErrorResponse("Invalid credentials.", 401));
        }

        sendToken(user, 200, res);

    }catch(error){
        next(error);
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({success: true, token});
}