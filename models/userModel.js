const connection = require("../db-config");
const db = connection.promise();
const bcrypt = require("bcryptjs");

const findMany = async () => {
  let sqlQuery = "SELECT * FROM users";

  const users = await db.query(sqlQuery).then(([result]) => result);
  return users;
};

const findByEmail = async (email) => {
  let sqlQuery = "SELECT * FROM users WHERE email = ?";

  const user = await db.query(sqlQuery, [email]).then(([result]) => result);

  return user;
};

const create = async ({ name, email, password, role }) => {
  let hashedPassword = await bcrypt.hash(password.toString(), 8);

  let sqlQuery =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

  await db.query(sqlQuery, [name, email, hashedPassword, role]);
};

module.exports = { findMany, findByEmail, create };
