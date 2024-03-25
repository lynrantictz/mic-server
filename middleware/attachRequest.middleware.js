function attachRequest(req, res, next) {
    res.locals.req = req; // Attach req to response locals
    next();
  }
  
  module.exports = attachRequest;