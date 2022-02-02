const res = require("express/lib/response");
const assetsModel = require("../models/assetsModel");

const getAssets = async (req, res) => {
  try {
    const assets = await assetsModel.getAll();

    if (!assets.length) {
      res.status(404).json("There are no assets created");
    } else {
      res.status(200).json(assets);
    }
  } catch (err) {
    res.status(500).json("Error retrieving data. Please, try again!");
  }
};

const getAssetsById = async (req, res) => {
  const id = req.params.id;
  try {
    const assetById = await assetsModel.getById(id);

    if (!assetById.length) {
      res
        .status(404)
        .json("There's no asset with this ID. Please, try with another one");
    } else {
      res.status(200).json(assetById);
    }
  } catch (err) {
    res.status(500).json("Error retrieving data. Please, try again");
  }
};

const createAsset = async (req, res) => {
  try {
    await assetsModel.create({ ...req.body });
    res.status(201).json("Asset added successfully");
  } catch (err) {
    res.status(500).json("Error adding asset. Please, try again");
  }
};

const editAsset = async (req, res) => {
  const propsToUpdate = req.body;
  const id = req.params.id;
  try {
    const asset = await assetsModel.getById(id);

    if (!asset.length) {
      res.status(404).json("There's no party with that ID");
    } else {
      await assetsModel.update(propsToUpdate, id);
      res.status(201).json("Asset updated successfully");
    }
  } catch (err) {
    res.status(500).json("Error updating information. Please try again!");
  }
};

const deleteAsset = async (req, res) => {
  const id = req.params.id;

  try {
    const asset = await assetsModel.getById(id);

    if (!asset.length) {
      res.status(404).json("There's no party with that ID");
    } else {
      await assetsModel.deleteModel(id);
      res.status(200).json("Asset deleted successfully");
    }
  } catch (err) {
    res.status(500).json("Error deleting asset. Please try again");
  }
};

module.exports = {
  getAssets,
  getAssetsById,
  createAsset,
  editAsset,
  deleteAsset,
};