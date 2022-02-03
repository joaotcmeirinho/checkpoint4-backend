const Joi = require("joi");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    name: Joi.string().max(50).presence(presence),
    email: Joi.string().email(30).max(255).presence(presence),
    password: Joi.string().min(15).max(50).presence(presence),
    role: Joi.string().max(10),
  }).validate(data, { abortEarly: false }).error;
};

module.exports = { validate };
