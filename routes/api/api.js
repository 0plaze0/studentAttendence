const express = require("express");
const router = express.Router();

router.route("/login").get((req, res) => {
  res.json({ attendence: 3 });
});

module.exports = router;
