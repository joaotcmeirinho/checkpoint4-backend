const { verify } = require("jsonwebtoken");
const { decodeUserFromJWT } = require("../helpers/users");

const validateToken = async (req, res, next) => {
  const token = req.headers.cookie;
  try {
    let validToken;
    if (!token) {
      res.status(401).json("You are not logged in");
    } else {
      validToken = verify(token.slice(12), process.env.JWT_PRIVATE_KEY);
      if (!validToken) {
        res.status(401).json("Not authorized");
      } else {
        req.user = validToken.name;
        next();
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { validateToken };
