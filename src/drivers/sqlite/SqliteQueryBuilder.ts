import { Database } from "bun:sqlite";
import { ColumnProps } from "../../types/Column";
import { SQLiteQueryBuilderProps } from "../../types/Sqlite";
import { SQLiteFilterBuilder } from "./SqliteFilterBuilder";

export class SQLiteQueryBuilder implements SQLiteQueryBuilderProps {
  db: Database;
  table: string;

  constructor(db: Database, table: string) {
    this.db = db;
    this.table = table;
  }

  select = (columns = "*") => {
    const result: Array<ColumnProps> = this.db
      .query(`SELECT ${columns.split("").join(", ")} from ${this.table}`)
      .all();
    return new SQLiteFilterBuilder(result);
  };

  insert = (columns: Array<Record<string, any>>) => {
    return columns.map(column => {
      const paramenters = [
        `INSERT INTO ${this.table}`,
        `(${Object.keys(column).join(", ")})`,
        `VALUES (${Object.values(column)
          .map(k => `"${k}"`)
          .join(", ")});`,
      ];

      this.db.query(paramenters.join(" ")).all();
    });
  };

  delete = () => {};
}
