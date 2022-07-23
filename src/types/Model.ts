import { ParameterProps } from "./Parameter";
import { FindOneQuery, FindAllQuery } from "./QueryTypes";

export interface ModelProps<Type> {
  table: string;
  hasParameter: (parameter: string) => boolean;
  findOne: (query?: FindOneQuery) => Type;
  findAll: (query?: FindAllQuery) => Type[];
  create: (query: Type) => Type;
  remove: (query: FindOneQuery) => Type;
  clear: () => Type;
  parameters: Map<string, ParameterProps>;
  belongsTo: any[];
  hasMany: any[];
}
