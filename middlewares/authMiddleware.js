const { verify } = require("jsonwebtoken");

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
        next();
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { validateToken };
