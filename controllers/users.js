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
    if (!user) {
      return res.status(400).send("User doesn't exist");
    } else {
      console.log("editing user req.body is", req.body);

      //save to db
      const username = user.username;
      const email = user.email;
      // const password = await bcrypt.hash(req.body.newPassword); //hash pw
      const password = req.body.newPassword;
      const avatar = req.body;

      const newUser = await new User({
        username,
        email,
        password,
        avatar
      });

      console.log("new user is", newUser);

      newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: Failed to update the user ${err}`));
    };
  } catch (error) {
    return res.status(400).json(`Error: user not found ${error}`);
  }
};

/* delete user */
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.cookies.userId);
    res.status(200).json({ message: "Account was deleted." });
  } catch (error) {
    next(error);
  }
};
