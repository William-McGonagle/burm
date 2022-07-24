import { DataType } from "./DataType";

export type ColumnProps = {
  field: string;
  type: DataType;
  key: boolean;
  primary: boolean;
  default: any;
  nullable: boolean;
  onUpdate: () => any;
  onCreate: () => any;
};
