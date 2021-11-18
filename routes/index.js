const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getRecentTransaction } = require("../controllers/dashboard");

router.use(cors());

/* GET home page. */
router.get("/", getRecentTransaction);

module.exports = router;
