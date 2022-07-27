import BurmType from "./BurmType";

export type ColumnProps = {
  field: string;
  type: BurmType;
  primary?: boolean;
  default?: any;
  nullable?: boolean;
  // key: boolean;
  // onUpdate: () => any;
  // onCreate: () => any;
};
