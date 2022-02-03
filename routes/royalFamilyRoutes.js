const express = require("express");
const router = express.Router();
const royalFamilyController = require("../controllers/royalFamilyController");

router.get("/", royalFamilyController.getFamily);

router.get("/:id", royalFamilyController.getFamilyMember);

router.post("/", royalFamilyController.addFamilyMember);

router.put("/:id", royalFamilyController.editMemberInfo);

module.exports = router;
