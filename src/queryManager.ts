import Sqlite from "./databases/sqlite";
import { DataType } from "./index";
import { ParameterProps } from "./types/Parameter";

function register(name, object) {
  let parameters = new Map<string, ParameterProps>();

  parameters.set("id", {
    type: DataType.INTEGER,
    key: true,
    primary: true,
    default: null,
    nullable: true,
    onUpdate: () => null,
    onCreate: () => null,
  });

  parameters.set("createdAt", {
    type: DataType.DATETIME,
    key: false,
    primary: false,
    default: null,
    nullable: true,
    onUpdate: () => null,
    onCreate: () => null,
  });

  parameters.set("updatedAt", {
    type: DataType.DATETIME,
    key: false,
    primary: false,
    default: null,
    nullable: true,
    onUpdate: () => null,
    onCreate: () => null,
  });

  for (const key in object) {
    if (typeof object[key] == "string") {
      parameters.set(key, {
        type: object[key],
        key: false,
        primary: false,
        default: null,
        nullable: true,
        onUpdate: () => null,
        onCreate: () => null,
      });
    } else if (typeof object[key] == "object") {
      parameters.set(key, {
        type: DataType.OBJECT,
        key: false,
        primary: false,
        default: null,
        nullable: true,
        onUpdate: () => null,
        onCreate: () => null,
        ...object[key],
      });
    }
  }

  const intermediate = {
    name,
    hasParameter: function (paramName) {
      return this.parameters.has(paramName);
    },
    findOne: function (query) {
      return findOne(query, this);
    },
    findAll: function (query) {
      return findAll(query, this);
    },
    create: function (query) {
      return create(query, this);
    },
    remove: function (query) {
      return remove(query, this);
    },
    clear: function (query) {
      return clear(query, this);
    },
    parameters,
    belongsTo: [],
    hasMany: [],
  };

  Sqlite.initializeModel(intermediate);

  return intermediate;
}

const customQuery = customQueryText => Sqlite.customQuery(customQueryText);

const findOne = (queryObject, databaseObject) =>
  Sqlite.findOne(queryObject, databaseObject);

const findAll = (queryObject, databaseObject) =>
  Sqlite.findAll(queryObject, databaseObject);

const create = (queryObject, databaseObject) =>
  Sqlite.create(queryObject, databaseObject);

const remove = (queryObject, databaseObject) =>
  Sqlite.remove(queryObject, databaseObject);

const clear = (queryObject, databaseObject) =>
  Sqlite.clear(queryObject, databaseObject);

export default {
  register,
  customQuery,
};
