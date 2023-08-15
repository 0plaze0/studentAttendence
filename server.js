require("dotenv").config();
const express = require("express");
const app = express();
const { logger } = require("./middleware/logger");

const PORT = process.env.PORT || 3400;

app.use(logger);

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is runnig on ${PORT}`);
});
