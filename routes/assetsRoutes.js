const express = require("express");
const router = express.Router();
const assetsController = require("../controllers/assetsController");
const { validateToken } = require("../middlewares/authMiddleware");

router.get("/", assetsController.getAssets);

router.get("/categories", assetsController.getCategories);

router.get("/:id", assetsController.getAssetsById);

router.post("/", validateToken, assetsController.createAsset);

router.put("/:id", validateToken, assetsController.editAsset);

router.delete("/:id", validateToken, assetsController.deleteAsset);

module.exports = router;
