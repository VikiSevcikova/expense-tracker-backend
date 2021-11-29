const User = require("../models/User");

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

  console.log(req);
  User.findById(req.cookies.userId)
    .then(user => {
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      user.isDeleted = req.body.isDeleted;

      user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: Failed to update the user ${err}`));
    })
    .catch(err => res.status(400).json(`Error: user not found ${err}`));

};

/* delete user */
exports.deleteUser = async (req, res, next) => {
  console.log("currentUser", req.cookies.userId);
  try {
    const user = await User.findByIdAndDelete(req.cookies.userId);
    res.status(200).json({ message: "Account was deleted." });
  } catch (error) {
    next(error);
  }
};
