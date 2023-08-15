const { logEvent } = require("./logger.js");

const errorHandler = (err, req, res, next) => {
  logEvent(`${err.name}\t${err.message}`, "error.txt");
  req.status(500).send(err.message);
};

module.exports = { errorHandler };
