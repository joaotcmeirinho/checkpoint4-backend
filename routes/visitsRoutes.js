const express = require("express");
const router = express.Router();
const visitsController = require("../controllers/visitsController");

router.get("/", visitsController.getVisits);

router.post("/", visitsController.createVisit);

module.exports = router;
