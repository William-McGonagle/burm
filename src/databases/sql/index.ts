import processCondition from "./condition";
import executeDatabaseQuery from "./executor";

function initializeModel(queryObject, databaseObject) {}

function findOne(queryObject, databaseObject) {
  return executeDatabaseQuery(
    `SELECT * FROM ${databaseObject.name}${
      queryObject.where !== undefined
        ? ` WHERE ${processCondition(queryObject.where)}`
        : ""
    } LIMIT 1`
  );
}

function findAll(queryObject, databaseObject) {
  return executeDatabaseQuery(
    `SELECT * FROM ${databaseObject.name}${
      queryObject.where !== undefined
        ? ` WHERE ${processCondition(queryObject.where)}`
        : ""
    }`
  );
}

function create(queryObject, databaseObject) {
  let params: Array<string> = [];
  let values: Array<string> = [];

  for (const key in queryObject) {
    params.push(key);
    values.push(`"${queryObject[key]}"`);
  }

  return executeDatabaseQuery(
    `INSERT INTO ${databaseObject.name}(${params.join(
      ", "
    )}) VALUES (${values.join(", ")})`
  );
}

function remove(queryObject, databaseObject) {
  if (queryObject.where == undefined) return "";

  return executeDatabaseQuery(
    `DELETE FROM ${databaseObject.name} WHERE ${processCondition(
      queryObject.where
    )}`
  );
}

function clear(queryObject, databaseObject) {
  return executeDatabaseQuery(`DELETE FROM ${databaseObject.name}`);
}

function customQuery(customQueryText) {
  return executeDatabaseQuery(customQueryText);
}

export default {
  findOne,
  findAll,
  create,
  remove,
  clear,
  customQuery,
  initializeModel,
};
