const jwt = require("jsonwebtoken");

const calculateJWTToken = (user, privateKey) => {
  return jwt.sign({ id: user.id, name: user.name }, privateKey, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const decodeUserFromJWT = (token) => {
  return jwt.decode(token);
};

module.exports = { calculateJWTToken, decodeUserFromJWT };
