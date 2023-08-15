require("dotenv").config();
const express = require("express");
const app = express();
const { logger } = require("./middleware/logger");
const { errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");
const { corsOptions } = require("./config/corsOption");
const PORT = process.env.PORT || 3400;

//middleware
app.use(logger);

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("hello");
});
//errorHandler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is runnig on ${PORT}`);
});
