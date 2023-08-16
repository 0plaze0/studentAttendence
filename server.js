require("dotenv").config();
const express = require("express");
const app = express();
const { logger } = require("./middleware/logger");
const cors = require("cors");
const { corsOptions } = require("./config/corsOption");
const { errorHandler } = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3400;

//middleware
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use("/api/v1/", require("./routes/api/api"));

//errorHandler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is runnig on ${PORT}`);
});
