const express = require("express");
const router = express.Router();
const assetsController = require("../controllers/assetsController");

router.get("/", assetsController.getAssets);

router.get("/:id", assetsController.getAssetsById);

router.post("/", assetsController.createAsset);

router.put("/:id", assetsController.editAsset);

router.delete("/:id", assetsController.deleteAsset);

module.exports = router;
