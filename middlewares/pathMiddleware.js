const pathMiddleware = (request, response, next) => {
  console.log("Path Middleware Started");

  next();
  console.log("Path Middleware Ended");
};

module.exports = { pathMiddleware };
