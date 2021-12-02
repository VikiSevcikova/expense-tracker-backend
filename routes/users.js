const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { currentUser, deleteUser, editUser } = require('../controllers/users');

/* GET users listing. */
router.route("/me").get(protect, currentUser);
router.route("/delete").delete(protect, deleteUser);
router.route("/edit").post(protect, editUser);

module.exports = router;
