const errorHandlingMiddleware = (error, req, res, next) => {
  res.status(500);

  return res.json({
    message: error.message,
  });
};
module.exports = errorHandlingMiddleware;
