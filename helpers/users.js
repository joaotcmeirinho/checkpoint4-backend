const jwt = require("jsonwebtoken");

const calculateJWTToken = (user, privateKey) => {
  return jwt.sign({ id: user.id, name: user.name }, privateKey, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = { calculateJWTToken };
