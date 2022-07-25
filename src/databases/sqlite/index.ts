import { ModelProps } from "../../types/Model";
import processCondition from "./condition";
import { executeDatabaseQuery } from "./executor";

function initializeModel<Type>(databaseObject: ModelProps<Type>) {
  let parameters: string[] = [];

  databaseObject.columns.map(p => {
    let attribs = [
      p.primary !== undefined && p.primary ? "PRIMARY" : undefined,
      p.key !== undefined && p.key ? "KEY" : undefined,
      p.default !== undefined ? `DEFAULT ${p.default}` : undefined,
    ];
    parameters.push(`${p.field} ${p.type} ${attribs.join(" ")}`);
  });

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

/**
 * TOOD: should return the newly created row
 * current behaviour: returns 0
 */
function create(queryObject, databaseObject) {
  return executeDatabaseQuery(
    `INSERT INTO ${databaseObject.table} (${Object.keys(queryObject).join(
      ", "
    )}) VALUES (${Object.values(queryObject)
      .map(k => `"${k}"`)
      .join(", ")});`
  );
}

function remove(queryObject, databaseObject) {
  return executeDatabaseQuery(
    `DELETE FROM ${databaseObject.table} ${
      queryObject?.where !== undefined &&
      `WHERE ${processCondition(queryObject.where)}`
    };`
  );
}

function clear(databaseObject) {
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
