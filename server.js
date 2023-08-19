require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const { logger } = require("./middleware/logger");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3400;
connectDB(process.env.DATABASE_URI);

//middleware
app.use(logger);
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/", require("./routes/api/api"));

//errorHandler
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("connection to mongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
