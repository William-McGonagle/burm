import Sqlite from "./databases/sqlite";
import { DataType } from "./index";
import { ColumnProps } from "./types/Column";
import { ModelProps } from "./types/Model";

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
  readonly [K in keyof T]?: ModelSchemaTypes[T[K]];
};

function register(table: string, model: Record<string, DataType>) {
  let columns: Array<ColumnProps> = new Array();

  columns.push(
    {
      field: "id",
      type: DataType.INTEGER,
      key: true,
      primary: true,
      default: undefined,
      nullable: false,
      onUpdate: () => null,
      onCreate: () => null,
    },
    {
      field: "createdAt",
      type: DataType.DATETIME,
      key: false,
      primary: false,
      default: "(datetime('now', 'localtime'))",
      nullable: true,
      onUpdate: () => null,
      onCreate: () => null,
    },
    {
      field: "updatedAt",
      type: DataType.DATETIME,
      key: false,
      primary: false,
      default: "(datetime('now', 'localtime'))",
      nullable: true,
      onUpdate: () => null,
      onCreate: () => null,
    }
  );

  for (const key in model) {
    // TODO: model is DataType.OBJECT

    columns.push({
      field: key,
      type: model[key],
      key: false,
      primary: false,
      default: undefined,
      nullable: true,
      onUpdate: () => null,
      onCreate: () => null,
    });
  }

  const _model = {} as const;
  // columns.forEach(c => {
  //   _model[c.field] = c.type;
  // });
  type Model = ModelSchema<typeof _model>;

  const intermediate: ModelProps<Model> = {
    table,
    hasParameter: function (paramName) {
      return this.parameters.has(paramName);
    },
    findOne: function (query) {
      return Sqlite.findOne(query, this);
    },
    findAll: function (query) {
      return Sqlite.findAll(query, this);
    },
    create: function (query) {
      return Sqlite.create(query, this);
    },
    remove: function (query) {
      return Sqlite.remove(query, this);
    },
    clear: function () {
      return Sqlite.clear(this);
    },
    columns,
    belongsTo: new Array(),
    hasMany: new Array(),
  };

  Sqlite.initializeModel<Model>(intermediate);

  return intermediate;
}

export default {
  register,
};
