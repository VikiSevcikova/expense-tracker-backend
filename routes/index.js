const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getAllTransaction, getRecentTransaction, getTranscationByDate } = require("../controllers/dashboard");
const { protect } = require("../middleware/auth");

router.use(cors());

/* GET home page. */

router.get("/all-transaction", protect, getAllTransaction);
router.get("/recent-transaction", protect, getRecentTransaction);
router.get("/transaction", protect, getTranscationByDate);

module.exports = router;
