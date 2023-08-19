const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("Student", studentSchema);
