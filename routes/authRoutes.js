const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { validateToken } = require("../middlewares/authMiddleware");

router.get("/", validateToken, authController.loggedIn);

router.post("/", authController.login);

module.exports = router;
