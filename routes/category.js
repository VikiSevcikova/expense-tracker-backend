const express = require('express');
const { getAllCategory, deleteCategory, editCategory, addCategory } = require('../controllers/category');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.route("/all").get(protect, getAllCategory);
router.route("/delete").delete(protect, deleteCategory);
router.route("/edit").post(protect, editCategory);
router.route("/add").post(protect, addCategory);

module.exports = router;
