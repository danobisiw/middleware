const globalMiddleware = (request, response, next) => {
  console.log("Global Middleware Started");

next();
console.log("Global Middleware Ended");
};


module.exports = { globalMiddleware };
