require('dotenv').config()
const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;

const auth = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  if (!authorizationHeader) {
    return res.status(401).json(formatErrorResponse('Unauthorized: No access token provided'));
  }

  const token = authorizationHeader.split(' ')[1]; // Split and take the token part
  if (!token) {
    return res.status(401).json(formatErrorResponse('Unauthorized: Invalid access token format'));
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err.message);
      return res.status(401).json( formatErrorResponse('Unauthorized: Invalid access token'));
    }

    req.user = decoded;
    next();
  });
};

module.exports = { auth };
