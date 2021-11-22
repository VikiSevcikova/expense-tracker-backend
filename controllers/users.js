const User = require("../models/User");

exports.currentUser = async (req, res, next) => {
    console.log("currentUser", req.cookies.userId);
    try{
        const user = await User.findById(req.cookies.userId);
        if(!user){
            return next(new ErrorResponse("Unauthorized access, login please.", 401));
        }
        res.status(200).json({user});
    }catch(error){
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    console.log("currentUser", req.cookies.userId);
    try{
        const user = await User.findById(req.cookies.userId);
        if(!user){
            await user.delete();
        }
        res.status(200).json({message: "Account was deleted."});
    }catch(error){
        next(error);
    }
}
