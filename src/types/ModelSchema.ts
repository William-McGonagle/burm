export type ModelSchemaTypes = {
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

export type ModelSchema<T extends Record<string, keyof ModelSchemaTypes>> = {
  readonly [K in keyof T]?: ModelSchemaTypes[T[K]];
};
