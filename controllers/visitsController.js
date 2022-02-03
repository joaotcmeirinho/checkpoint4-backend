const visitsModel = require("../models/visitsModel");

const getVisits = async (req, res) => {
  try {
    const visits = await visitsModel.findMany();

    if (!visits.length) {
      res.status(404).json("There are no visits created");
    } else {
      res.status(200).json(visits);
    }
  } catch (err) {
    res.status(500).json("Error retrieving info. Please, try again");
  }
};

const createVisit = async (req, res) => {
  try {
    await visitsModel.create({ ...req.body });

    res.status(201).json("Visit scheduled successfully");
  } catch (err) {
    res.status(500).json("Error scheduling visit. Please, try again");
    console.log(err);
  }
};

module.exports = { getVisits, createVisit };
