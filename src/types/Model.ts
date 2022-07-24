import { ColumnProps } from "./Column";
import { FindAllQuery, FindOneQuery } from "./QueryTypes";

export interface ModelProps<Type> {
  table: string;
  hasParameter: (parameter: string) => boolean;
  findOne: (query?: FindOneQuery) => Type[];
  findAll: (query?: FindAllQuery) => Type[];
  create: (query: Type) => Type[];
  remove: (query?: FindOneQuery) => void;
  clear: () => void;
  columns: Array<ColumnProps>;
  belongsTo: any[];
  hasMany: any[];
}
