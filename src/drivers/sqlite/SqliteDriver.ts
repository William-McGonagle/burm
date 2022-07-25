import { Database } from "bun:sqlite";
import BurmType from "../../types/BurmType";
import { ColumnProps } from "../../types/Column";
import { ModelProps } from "../../types/Model";
import { SQLiteDriverProps } from "../../types/Sqlite";
import { SQLiteQueryBuilder } from "./SqliteQueryBuilder";

export class SQLiteDriver implements SQLiteDriverProps {
  private static SQLiteDriver: SQLiteDriverProps;
  db: Database;
  register: () => ModelProps;

  private constructor(dbPath: string = ":memory:") {
    this.db = new Database(dbPath);
  }

  private static get Instance() {
    return this.SQLiteDriver || (this.SQLiteDriver = new this());
  }

  private static executeQuery = (query: string) =>
    this.Instance.db.query(query).all();

  public static register = (table: string, models: ColumnProps[]) => {
    /*
     * TODO: map columns to object literal or equaly expression to generate dynamic model schemas
     * const _model = {} as const;
     * type Model = ModelSchema<typeof _model>;
     */

    const intermediate: ModelProps = {
      table,
      columns: models,
    };

    let parameters: string[] = [];
    models.map(p => {
      let attribs = [
        p.primary !== undefined && p.primary ? "PRIMARY KEY" : undefined,
        p.default !== undefined ? `DEFAULT ${p.default}` : undefined,
      ];
      parameters.push(`${p.field} ${p.type} ${attribs.join(" ")}`);
    });

    this.executeQuery(
      `CREATE TABLE IF NOT EXISTS ${table} (${parameters.join(", ")});`
    );

    return intermediate;
  };

  public static from = (table: string) => {
    return new SQLiteQueryBuilder(this.Instance.db, table);
  };
}
