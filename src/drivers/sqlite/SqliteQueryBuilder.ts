import { Database } from "bun:sqlite";
import { SQLiteBuilder } from "./SQLiteBuilder";
import { SQLiteFilterBuilder } from "./SqliteFilterBuilder";

export class SQLiteQueryBuilder<T> extends SQLiteBuilder<T> {
  constructor(db: Database, table: string) {
    super({ db, table } as unknown as SQLiteBuilder<T>);
    this.db = db;
    this.table = table;
  }

  /**
   * Performs vertical filtering with SELECT.
   *
   * @param columns  The columns to retrieve, separated by commas.
   */
  select = (columns = "*"): SQLiteFilterBuilder<T> => {
    this.result = this.db
      .query(`SELECT ${columns.split("").join(", ")} from ${this.table}`)
      .all();

    return new SQLiteFilterBuilder(this);
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
