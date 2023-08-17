const express = require("express");
const router = express.Router();
const studentList = require("../../model/student");
const teacher = require("../../model/teacher");

router.route("/student").get((req, res) => {
  res.json(studentList);
});
router.route("/teacher").get((req, res) => {
  res.json(teacher);
});

module.exports = router;
