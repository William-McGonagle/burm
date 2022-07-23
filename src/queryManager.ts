import Sqlite from "./databases/sqlite";
import { DataType } from "./index";
import { ModelProps } from "./types/Model";
import { ParameterProps } from "./types/Parameter";

type ModelSchemaTypes = {
  TEXT: string;
  INTEGER: number;
  BOOLEAN: boolean;
  STRING: string;
  SMALLINT: number;
  BIGINT: number;
  DECIMAL: number;
  DATE: string;
  TIME: string;
  DATETIME: string;
  DATETIMEZONE: string;
  OBJECT: Object;
  ARRAY: Array<any>;
  FLOAT: number;
  GUID: string;
  STREAM: string;
};

type ModelSchema<T extends Record<string, keyof ModelSchemaTypes>> = {
  readonly [K in keyof T]: ModelSchemaTypes[T[K]];
};

// function asSchema<T extends Record<string, keyof ModelSchemaTypes>>(t: T): T {
//   return t;
// }

function register(table: string, model: Record<string, DataType>) {
  let parameters = new Map<string, ParameterProps>();

  parameters.set("id", {
    type: DataType.INTEGER,
    key: true,
    primary: true,
    default: null,
    nullable: false,
    onUpdate: () => null,
    onCreate: () => null,
  });

  parameters.set("createdAt", {
    type: DataType.DATETIME,
    key: false,
    primary: false,
    default: "(datetime('now', 'localtime'))",
    nullable: true,
    onUpdate: () => null,
    onCreate: () => null,
  });

  parameters.set("updatedAt", {
    type: DataType.DATETIME,
    key: false,
    primary: false,
    default: "(datetime('now', 'localtime'))",
    nullable: true,
    onUpdate: () => null,
    onCreate: () => null,
  });

  for (const key in model) {
    if (model[key] === DataType.OBJECT) {
      parameters.set(key, {
        type: DataType.OBJECT,
        key: false,
        primary: false,
        default: null,
        nullable: true,
        onUpdate: () => null,
        onCreate: () => null,
      });
      continue;
    }

    parameters.set(key, {
      type: model[key],
      key: false,
      primary: false,
      default: null,
      nullable: true,
      onUpdate: () => null,
      onCreate: () => null,
    });
  }

  const _model = {} as const;
  for (const [key, value] of parameters) {
    _model[key] = value.type;
  }

  type Model = ModelSchema<typeof _model>;

  const intermediate: ModelProps<Model> = {
    table,
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
    clear: function () {
      return clear({}, this);
    },
    parameters,
    belongsTo: [],
    hasMany: [],
  };

  Sqlite.initializeModel<Model>(intermediate);

  return intermediate;
}

const customQuery = customQueryText => Sqlite.customQuery(customQueryText);

const findOne = (queryObject, databaseObject) => {
  return Sqlite.findOne(queryObject, databaseObject);
};

function findAll(queryObject, databaseObject) {
  return Sqlite.findAll(queryObject, databaseObject);
}

function create(queryObject, databaseObject) {
  return Sqlite.create(queryObject, databaseObject);
}

function remove(queryObject, databaseObject) {
  return Sqlite.remove(queryObject, databaseObject);
}

function clear(queryObject, databaseObject) {
  return Sqlite.clear(queryObject, databaseObject);
}

export default {
  register,
  customQuery,
};
