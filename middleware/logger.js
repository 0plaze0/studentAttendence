const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
const { error } = require("console");

const logEvent = (message, file) => {
  const date = `${format(new Date(), "yyyy-MM-dd\tHH-mm-ss")}`;
  const msg = `${date}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs")))
      fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    fsPromises.appendFile(path.join(__dirname, "..", "logs", file), msg);
  } catch (err) {
    console.error(err.message);
  }
};

const logger = (req, res, next) => {
  let origin = req.headers.origin;
  if (!origin) origin = "localhost";
  logEvent(`${req.url}\t${origin}\t${req.method}`, "log.txt");
  next();
};

module.exports = { logger, logEvent };
