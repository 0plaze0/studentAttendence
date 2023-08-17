const mongoose = require("mongoose");
const { errorHandler } = require("../middleware/errorHandler");

const connectDB = async (DB_URI) => {
  try {
    mongoose.connect(DB_URI);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
