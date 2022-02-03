const connection = require("../db-config");
const db = connection.promise();

const findMany = async () => {
  let sqlQuery = "SELECT * FROM royal_family";

  const family = await db.query(sqlQuery).then(([result]) => result);

  return family;
};

const findOne = async (id) => {
  let sqlQuery = "SELECT * FROM royal_family WHERE id = ?";

  const member = await db.query(sqlQuery, [id]).then(([result]) => result);

  return member;
};

const create = async ({ name, age, description, url }) => {
  let sqlQuery =
    "INSERT INTO royal_family (name, age, description, url) VALUES (?, ?, ?, ?)";

  await db.query(sqlQuery, [name, age, description, url]);
};

const update = async (propsToUpdate, id) => {
  let sqlQuery = "UPDATE royal_family SET ? WHERE id = ?";

  await db.query(sqlQuery, [propsToUpdate, id]);
};

module.exports = { findMany, findOne, create, update };
