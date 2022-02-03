const userModel = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.findMany();

    if (!users.length) {
      res.status(404).json("There are no users created");
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json("Error retrieving info. Please, try again");
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await userModel.findByEmail(email);

    if (user[0].length) {
      res
        .status(409)
        .json("That email is already in use. Please, use another one");
    } else {
      await userModel.create({ ...req.body });

      res.status(201).json("Admin registered successfully");
    }
  } catch (err) {
    res.status(500).json("Error registering admin");
  }
};

module.exports = { getUsers, createUser };
