import { Database } from "bun:sqlite";
import { SQLiteQueryBuilderProps } from "../../types/Sqlite";

export abstract class SQLiteBuilder<T> implements SQLiteQueryBuilderProps<T> {
  db: Database;
  table: string;
  result: Array<any>;
  select: () => any;
  insert: (columns: Record<string, any>[]) => void;
  delete: () => void;

  constructor(builder: SQLiteBuilder<T>) {
    Object.assign(this, builder);
  }
}
