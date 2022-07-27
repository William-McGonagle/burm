import { Database } from "bun:sqlite";
import { SQLiteQueryBuilderProps } from "../../types/Sqlite";

export abstract class SQLiteBuilder<T> implements SQLiteQueryBuilderProps<T> {
  db: Database;
  table: string;
  result: Array<any>;

  constructor(builder: SQLiteBuilder<T>) {
    Object.assign(this, builder);
  }
}
