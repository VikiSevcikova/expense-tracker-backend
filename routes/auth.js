const express = require('express');
const router = express.Router();

const { register, login, forgotPassword, resetPassword, googleLogin } = require('../controllers/auth');

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/google-login").post(googleLogin);
router.route("/reset-password").post(forgotPassword);
router.route("/reset-password/:userId/:token").post(resetPassword);

module.exports = router;