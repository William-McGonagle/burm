import { Database } from "bun:sqlite";
import { SQLiteFilterBuilder } from "../drivers/sqlite/SqliteFilterBuilder";
import { ModelProps } from "./Model";

export interface SQLiteDriverProps {
  db: Database;
  register: () => ModelProps;
}

export interface SQLiteQueryBuilderProps<T> {
  db: Database;
  table: string;
  result: Array<any>;
  select: () => SQLiteFilterBuilder<T>;
  insert: (columns: Array<Record<string, any>>) => void;
  delete: () => void;
}
