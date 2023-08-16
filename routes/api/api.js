const express = require("express");
const router = express.Router();
const studentList = require("../../User/student");
const teacher = require("../../User/teacher");

router.route("/student").get((req, res) => {
  res.json(studentList);
});
router.route("/teacher").get((req, res) => {
  res.json(teacher);
});

module.exports = router;
