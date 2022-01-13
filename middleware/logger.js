const logger = (req, res, next) => {
  // console.log("in logger, and printing req.headers");
  // console.log(req.headers);
  console.log("in logger, and printing req.body");
  console.log(req.body);
  next();
};

module.exports = logger;
