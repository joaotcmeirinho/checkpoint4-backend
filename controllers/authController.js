const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { calculateJWTToken } = require("../helpers/users");

const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findByEmail(email);

    if (!user.length) res.status(401).json("Invalid credentials");
    const verifyPassword = await bcrypt.compare(password, user[0].password);
    if (!verifyPassword) res.status(401).json("Invalid credentials");

    const accessToken = calculateJWTToken(user[0], process.env.JWT_PRIVATE_KEY);
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res.cookie("accessToken", accessToken, cookieOptions);
    res.json("Successfully logged in!");
  } catch (err) {
    res.status(500).json("Error logging in. Please try again");
  }
};

const logout = async (req, res) => {
  res.cookie("accessToken", "none", {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: false,
  });
  res.status(200).json("Successfully logged out!");
};

module.exports = { login, logout };
