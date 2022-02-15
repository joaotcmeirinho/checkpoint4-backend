const visitsModel = require("../models/visitsModel");
const { transporter } = require("../helpers/email");

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

const confirmVisitEmail = async (date, time, email) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your visit to Winterfell",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;">
    <h2>Your visit to Winterfell</h2>
    <p>Your visit is scheduled for ${date} at ${time}. We are excited to receive you in our beautiful kingdom.</p>
    <p>Kind Regards</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const createVisit = async (req, res) => {
  let { date, time, email } = req.body;

  console.log(req.body);
  try {
    await confirmVisitEmail(date, time, email);

    await visitsModel.create({ ...req.body });
    res
      .status(201)
      .json(
        "Visit scheduled successfully. You will receive a confirmation in your email inbox. Thank you!"
      );
  } catch (err) {
    res.status(500).json("Error scheduling visit. Please, try again");
    console.log(err);
  }
};

module.exports = { getVisits, confirmVisitEmail, createVisit };
