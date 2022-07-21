import { ParameterProps } from "./Parameter";

export interface IntermediateProps {
  name: string;
  hasParameter: (parameter: string) => boolean;
  findOne: (query: any) => any;
  findAll: (query: string) => void;
  create: (query: string) => void;
  remove: (query: string) => void;
  clear: (query: string) => void;
  parameters: Map<string, ParameterProps>;
  belongsTo: any[];
  hasMany: any[];
}
