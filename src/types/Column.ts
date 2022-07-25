import BurmType from "./BurmType";

export type ColumnProps = {
  field: string;
  type: BurmType;
  key: boolean;
  primary: boolean;
  default: any;
  nullable: boolean;
  onUpdate: () => any;
  onCreate: () => any;
};
