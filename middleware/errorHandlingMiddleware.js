const errorHandlingMiddleware = (error, req, res) => {
  return res.status(500).json({
    message: error.message,
  });
};
module.exports = errorHandlingMiddleware;
