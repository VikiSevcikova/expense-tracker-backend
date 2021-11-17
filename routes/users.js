const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { currentUser } = require('../controllers/users');

/* GET users listing. */
router.route("/me").get(protect, currentUser);

module.exports = router;
