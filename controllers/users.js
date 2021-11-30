const User = require("../models/User");
const bcrypt = require("bcryptjs"); //hash password

exports.currentUser = async (req, res, next) => {
  console.log("currentUser", req.cookies.userId);
  try {
    const user = await User.findById(req.cookies.userId);
    if (!user) {
      return next(new ErrorResponse("Unauthorized access, login please.", 401));
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

/* edit user */
exports.editUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.cookies.userId);
    console.log(user)
    if (!user) {
      return res.status(400).send("User doesn't exist");
    } else {
      console.log("editing user req.body is", req.body);

      user.password = req.body.password;
      console.log(user)
      user.save();
      
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(400).json(`Error: user not found ${error}`);
  }
};

/* delete user */
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.cookies.userId);
    return res.status(200).json({ message: "Account was deleted." });
  } catch (error) {
    next(error);
  }
};
