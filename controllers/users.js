const User = require("../models/User");

exports.currentUser = async (req, res, next) => {
    console.log("currentUser", req.cookies.userId);
    try{
        //select("+password") means that we want also to return the password, because is schema we set select to false
        const user = await User.findOne({ id: req.cookies.userId});
        if(!user){
            return next(new ErrorResponse("Unauthorized access, login please.", 401));
        }

        res.status(200).json({user});

    }catch(error){
        next(error);
    }
}
