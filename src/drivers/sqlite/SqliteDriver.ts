import { Database } from "bun:sqlite";
import { ColumnProps } from "../../types/Column";
import { ModelProps } from "../../types/Model";
import { SQLiteDriverProps } from "../../types/Sqlite";
import { SQLiteQueryBuilder } from "./SqliteQueryBuilder";

export class SQLiteDriver implements SQLiteDriverProps {
  private static SQLiteDriver: SQLiteDriverProps;
  db: Database;
  result: Array<any>;
  register: () => ModelProps;
  from: <T>() => SQLiteQueryBuilder<T>;
  export: () => Array<any>;

  private constructor(dbPath: string = ":memory:") {
    this.db = new Database(dbPath);
  }

  private static get Instance() {
    return this.SQLiteDriver || (this.SQLiteDriver = new this());
  }

  private static executeQuery = (query: string) =>
    this.Instance.db.query(query).all();

  public static register = (table: string, models: Array<ColumnProps>) => {
    /*
     * TODO: map columns to object literal or equaly expression to generate dynamic model schemas
     * const _model = {} as const;
     * type Model = ModelSchema<typeof _model>;
     */

    const intermediate: ModelProps = {
      table,
      columns: models,
    };

    let parameters: Array<string> = new Array();
    for (const model of models) {
      const attribs = [
        model.primary !== undefined && model.primary
          ? "PRIMARY KEY"
          : undefined,
        model.default !== undefined ? `DEFAULT ${model.default}` : undefined,
      ];
      parameters.push(`${model.field} ${model.type} ${attribs.join(" ")}`);
    }

    this.executeQuery(
      `CREATE TABLE IF NOT EXISTS ${table} (${parameters.join(", ")});`
    );

    return intermediate;
  };

  public static from = <T>(table: string): SQLiteQueryBuilder<T> => {
    return new SQLiteQueryBuilder(
      this.Instance.db,
      table,
      this.Instance.result
    );
  };
}
