const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { currentUser, deleteUser } = require('../controllers/users');

/* GET users listing. */
router.route("/me").get(protect, currentUser);
router.route("/delete").delete(protect, deleteUser);

module.exports = router;
