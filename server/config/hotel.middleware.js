
module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    hotelMiddleware(req, res, next);
  } else {
    next();
  }
};
