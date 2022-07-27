import { Database } from "bun:sqlite";
import { SQLiteFilterBuilder } from "../drivers/sqlite/SQLiteFilterBuilder";
import { SQLiteQueryBuilder } from "../drivers/sqlite/SQLiteQueryBuilder";
import { ModelProps } from "./Model";

export interface SQLiteDriverProps {
  db: Database;
  result: Array<any>;
  register: () => ModelProps;
  from: <T>() => SQLiteQueryBuilder<T>;
}

export interface SQLiteQueryBuilderProps<T> {
  db: Database;
  table: string;
  result: Array<any>;
  select?: () => SQLiteFilterBuilder<T>;
  insert?: (columns: Array<Record<string, any>>) => void;
  update?: () => void;
  delete?: () => void;
  export?: () => Array<any>;
}
