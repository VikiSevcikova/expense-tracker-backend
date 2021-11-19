const express = require('express');
const router = express.Router();

const { register, login, logout, forgotPassword, resetPassword } = require('../controllers/auth');

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/reset-password").post(forgotPassword);
router.route("/reset-password/:userId/:token").post(resetPassword);

module.exports = router;