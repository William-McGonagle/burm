import { DataType } from "./DataType";

export type ParameterProps = {
  type: DataType;
  key: boolean;
  primary: boolean;
  default: any;
  nullable: boolean;
  onUpdate: () => any;
  onCreate: () => any;
};
