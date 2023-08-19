const mongoose = require("mongoose");

const connectDB = async (DB_URI) => {
  try {
    await mongoose.connect(DB_URI);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
