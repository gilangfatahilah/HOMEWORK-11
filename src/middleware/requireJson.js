exports.requireJson = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    const error = new Error(
      "Sorry, the request body require application/json type!"
    );
    error.status = 400;
    throw error;
  } else {
    next();
  }
};
