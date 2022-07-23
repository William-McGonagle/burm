import { ModelProps } from "../../types/Model";
import processCondition from "./condition";
import { executeDatabaseQuery } from "./executor";

function initializeModel<Type>(databaseObject: ModelProps<Type>) {
  let parameters: string[] = [];

  for (let key of databaseObject.parameters.keys()) {
    let current = databaseObject.parameters.get(key);

    let attribs = [
      current.primary !== undefined && current.primary ? "PRIMARY" : undefined,
      current.key !== undefined && current.key ? "KEY" : undefined,
      current.default !== null ? `DEFAULT ${current.default}` : undefined,
    ];
    parameters.push(`${key} ${current.type} ${attribs.join(" ")}`.trim());
  }

  return executeDatabaseQuery(
    `CREATE TABLE IF NOT EXISTS ${databaseObject.table} (${parameters.join(
      ", "
    )});`
  );
}

function findOne(queryObject, databaseObject) {
  return executeDatabaseQuery(
    `SELECT * FROM ${databaseObject.table} ${
      queryObject?.where !== undefined &&
      `WHERE ${processCondition(queryObject.where)}`
    } ORDER BY id ASC LIMIT 1;`
  );
}

function findAll(queryObject, databaseObject) {
  return executeDatabaseQuery(
    `SELECT * FROM ${databaseObject.table} ${
      queryObject?.where !== undefined &&
      `WHERE ${processCondition(queryObject.where)}`
    };`
  );
}

function create(queryObject, databaseObject) {
  let params: Array<string> = [];
  let values: Array<string> = [];

  for (const [key, value] of Object.entries(queryObject)) {
    params.push(key);
    values.push(`"${value}"`);
  }

  return executeDatabaseQuery(
    `INSERT INTO ${databaseObject.table} (${params.join(
      ", "
    )}) VALUES (${values.join(", ")});`
  );
}

function remove(queryObject, databaseObject) {
  if (queryObject.where == undefined) return {};

  return executeDatabaseQuery(
    `DELETE FROM ${databaseObject.table} WHERE ${processCondition(
      queryObject.where
    )};`
  );
}

function clear(queryObject, databaseObject) {
  return executeDatabaseQuery(`DELETE FROM ${databaseObject.table};`);
}

function customQuery(customQueryText) {
  return executeDatabaseQuery(customQueryText);
}

export default {
  initializeModel,
  findOne,
  findAll,
  create,
  remove,
  clear,
  customQuery,
};
