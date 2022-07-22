import Sqlite from "./databases/sqlite";
import { DataType } from "./index";
import { ModelProps } from "./types/Model";
import { ParameterProps } from "./types/Parameter";

function register<Type>(name, object):ModelProps<Type> {
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

  const intermediate:ModelProps<Type> = {
    name,
    hasParameter: function (paramName) {
      return this.parameters.has(paramName);
    },
    findOne: function (query):Type {
      return findOne<Type>(query, this);
    },
    findAll: function (query):Type[] {
      return findAll<Type>(query, this);
    },
    create: function (query):Type {
      return create<Type>(query, this);
    },
    remove: function (query):Type {
      return remove<Type>(query, this);
    },
    clear: function ():Type {
      return clear<Type>({}, this);
    },
    parameters,
    belongsTo: [],
    hasMany: [],
  };

  Sqlite.initializeModel(intermediate);

  return intermediate;
}

const customQuery = customQueryText => Sqlite.customQuery(customQueryText);

function findOne<Type> (queryObject, databaseObject):Type {
  return Sqlite.findOne(queryObject, databaseObject);
}

function findAll<Type> (queryObject, databaseObject):Type[] {
  return Sqlite.findAll(queryObject, databaseObject);
}

function create<Type> (queryObject, databaseObject):Type {
  return Sqlite.create(queryObject, databaseObject);
}

function remove<Type> (queryObject, databaseObject):Type {
  return Sqlite.remove(queryObject, databaseObject);
}

function clear<Type> (queryObject, databaseObject):Type {
  return Sqlite.clear(queryObject, databaseObject);
}

export default {
  register,
  customQuery,
};
