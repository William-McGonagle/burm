import { ParameterProps } from "./Parameter";
import { FindOneQuery, FindAllQuery } from "./QueryTypes";

export interface ModelProps {
  name: string;
  hasParameter: (parameter: string) => boolean;
  findOne: (query: FindOneQuery) => any;
  findAll: (query: FindAllQuery) => void;
  create: (query: any) => void;
  remove: (query: any) => void;
  clear: (query: any) => void;
  parameters: Map<string, ParameterProps>;
  belongsTo: any[];
  hasMany: any[];
}
