const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;
const refreshTokens = {}; // Store refresh tokens (in memory for simplicity)

// Function to generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
};

// Function to generate refresh token
const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign({ username: user.username }, secretKey);
  refreshTokens[refreshToken] = refreshToken;
  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
