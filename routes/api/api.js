const express = require("express");
const router = express.Router();
const Student = require("./../../model/studentSchema");
const studentList = require("../../model/student");
const teacher = require("../../model/teacher");

router
  .route("/student")
  .get(async (req, res) => {
    const student = await Student.find();
    if (!student) res.send(204).json({ message: "No student" });
    res.json(student);
  })
  .post(async (req, res) => {
    const student = {
      username: req.body.username,
      password: req.body.password,
    };
    await Student.create(student);
    res.status(201).json(student);
  });
router.route("/teacher").get((req, res) => {
  res.json(teacher);
});

module.exports = router;
