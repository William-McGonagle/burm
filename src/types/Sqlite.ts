import { Database } from "bun:sqlite";
import { SQLiteFilterBuilder } from "../drivers/sqlite/SqliteFilterBuilder";
import { ModelProps } from "./Model";

export interface SQLiteDriverProps {
  db: Database;
  register: () => ModelProps;
}

export interface SQLiteQueryBuilderProps {
  db: Database;
  table: string;

  select: () => SQLiteFilterBuilder;
  insert: (columns: Array<Record<string, any>>) => void[];
  delete: () => void;
}
