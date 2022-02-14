const { transporter } = require("../helpers/email");

const sendEmail = (req, res) => {
  let { email_from, matter, text } = req.body;

  let mailOptions = {
    from: email_from,
    to: process.env.EMAIL,
    subject: matter,
    text: text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(500).json("Error sending email, please try again.");
    } else {
      res
        .status(200)
        .json(
          "Email sent successfully, we will try to answer as soon as we can. Thank you!"
        );
    }
  });
};

module.exports = { sendEmail };
