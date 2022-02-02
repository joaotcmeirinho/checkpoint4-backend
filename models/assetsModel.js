const connection = require("../db-config");
const db = connection.promise();

const getAll = async () => {
  let sqlQuery = "SELECT * FROM assets";

  const assets = await db.query(sqlQuery).then(([result]) => result);

  return assets;
};

const getById = async (id) => {
  let sqlQuery = "SELECT * FROM assets WHERE id = ?";

  const assetById = await db.query(sqlQuery, [id]).then(([result]) => result);

  return assetById;
};

const create = async ({ name, quantity, worth }) => {
  let sqlQuery = "INSERT INTO assets (name, quantity, worth) VALUES (?, ?, ?)";

  await db.query(sqlQuery, [name, quantity, worth]);
};

const update = async (propsToUpdate, id) => {
  let sqlQuery = "UPDATE assets SET ? WHERE id = ?";

  await db.query(sqlQuery, [propsToUpdate, id]);
};

const deleteModel = async (id) => {
  let sqlQuery = "DELETE FROM assets WHERE id = ?";

  await db.query(sqlQuery, [id]);
};

module.exports = { getAll, getById, create, update, deleteModel };
