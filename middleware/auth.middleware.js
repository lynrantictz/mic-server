const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;

// Middleware to verify JWT access token
const auth = (req, res, next) => {
  const accessToken = req.headers['authorization'];

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized: No access token provided' });
  }

  jwt.verify(accessToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid access token' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = { auth };
