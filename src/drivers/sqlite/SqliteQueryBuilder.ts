import { Database } from "bun:sqlite";
import { writeFileSync } from "fs";
import { ColumnProps } from "../../types/Column";
import { SQLiteBuilder } from "./SQLiteBuilder";
import { SQLiteFilterBuilder } from "./SqliteFilterBuilder";

export class SQLiteQueryBuilder<T> extends SQLiteBuilder<T> {
  constructor(db: Database, table: string, result: Array<any>) {
    super({ db, table, result } as unknown as SQLiteBuilder<T>);
    this.db = db;
    this.table = table;
    this.result = result;
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

  /**
   * Performs an INSERT into the table.
   *
   * @param columns  The key-value array to insert.
   */
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

  /**
   * Performs an UPDATE on the table.
   *
   * @param columns  The columns to update.
   */
  update = () => {};

  /**
   * Performs a DELETE on the table.
   *
   * @param columns  The columns to delete.
   */
  delete = (): SQLiteFilterBuilder<T> => {
    return new SQLiteFilterBuilder(this);
  };

  /**
   * Exports the table to a equally named csv file.
   */
  export = () => {
    const tempResult: Array<ColumnProps> = this.db
      .query<Array<ColumnProps>>(`SELECT * FROM ${this.table};`)
      .all();

    const keys = Object.keys(tempResult[0]).join(",");
    const values = tempResult.map(tr => {
      return Object.values(tr).join(",");
    });

    writeFileSync(
      `./${this.table}.csv`,
      [keys, ...values].join("\r\n"),
      (err: any) => {
        return console.error(err);
      }
    );
  };
}
