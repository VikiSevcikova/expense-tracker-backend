const User = require("../models/User");

exports.currentUser = async (req, res, next) => {
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
    if (!user) {
      return res.status(400).send("User doesn't exist");
    } else {
      //update password or avatar
      if (req.body.password) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        user.avatar = req.body.avatar || user.avatar;
      } else {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.avatar = req.body.avatar || user.avatar;
      }

      const updatedUser = await user.save();
      return res.status(200).json(updatedUser);
    };
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
