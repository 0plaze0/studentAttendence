const mongoose = require("mongoose");
const { student } = require("./student");
const studentList = require("./student");

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
