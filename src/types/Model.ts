import { ParameterProps } from "./Parameter";
import { FindOneQuery, FindAllQuery } from "./QueryTypes";

export interface IntermediateProps {
  name: string;
  hasParameter: (parameter: string) => boolean;
  findOne: (query: FindOneQuery) => any;
  findAll: (query: FindAllQuery) => void;
  create: (query: string) => void;
  remove: (query: string) => void;
  clear: (query: string) => void;
  parameters: Map<string, ParameterProps>;
  belongsTo: any[];
  hasMany: any[];
}
