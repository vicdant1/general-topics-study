const InitialMiddleware = (req, res, next) => {
  console.log(`protocol: ${req.protocol}`);
  next();
}

module.exports = InitialMiddleware;