const whitelist = [
  "https://www.yourWebsite.com",
  "https://localhost:3400",
  "https://127.0.0.1:5501",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};

module.exports = { corsOptions };
