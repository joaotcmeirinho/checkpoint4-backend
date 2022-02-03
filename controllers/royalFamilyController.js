const royalFamilyModel = require("../models/royalFamilyModel");

const getFamily = async (req, res) => {
  try {
    const family = await royalFamilyModel.findMany();

    if (!family.length) {
      res.status(404).json("There are no members in the royal family");
    } else {
      res.status(200).json(family);
    }
  } catch (err) {
    res.status(500).json("Error retrieving data. Please, try again");
  }
};

const getFamilyMember = async (req, res) => {
  const id = req.params.id;
  try {
    const member = await royalFamilyModel.findOne(id);

    if (!member.length) {
      res.status(404).json("There's no royal member with this ID");
    } else {
      res.status(200).json(member);
    }
  } catch (err) {
    res.status(500).json("Error retrieving data. Please, try again");
  }
};

const addFamilyMember = async (req, res) => {
  try {
    await royalFamilyModel.create({ ...req.body });

    res.status(200).json("Royal member successfully added");
  } catch (err) {
    res.status(500).json("Error adding a royal member. Please, try again");
  }
};

const editMemberInfo = async (req, res) => {
  const propsToUpdate = req.body;
  const id = req.params.id;
  try {
    const member = await royalFamilyModel.findOne(id);

    if (!member.length) {
      res.status(404).json("There's no royal member with that ID");
    } else {
      await royalFamilyModel.update(propsToUpdate, id);
      res.status(201).json("Royal member info updated successfully");
    }
  } catch (err) {
    res.status(500).json("Error updating information. Please try again!");
  }
};

module.exports = {
  getFamily,
  getFamilyMember,
  addFamilyMember,
  editMemberInfo,
};
