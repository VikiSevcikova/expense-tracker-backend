const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getAllTransaction, getRecentTransaction, getTranscationByDate } = require("../controllers/dashboard");

router.use(cors());

/* GET home page. */

router.get("/all-transaction", getAllTransaction);
router.get("/recent-transaction", getRecentTransaction);
router.get("/transaction", getTranscationByDate);

module.exports = router;
