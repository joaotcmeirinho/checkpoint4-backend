const connection = require("../db-config");
const db = connection.promise();

const findMany = async () => {
  let sqlQuery = "SELECT * FROM visits";

  const visits = await db.query(sqlQuery).then(([result]) => result);
  return visits;
};

const create = async ({ date, time, email }) => {
  let sqlQuery = "INSERT INTO visits (date, time, email) VALUES (?, ?, ?)";

  await db.query(sqlQuery, [date, time, email]);
};

module.exports = { findMany, create };
