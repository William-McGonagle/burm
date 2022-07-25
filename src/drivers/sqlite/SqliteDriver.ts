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

  public static register = (table: string, model: Record<string, BurmType>) => {
    let columns: Array<ColumnProps> = new Array();

    columns.push(
      {
        field: "id",
        type: BurmType.INTEGER,
        key: true,
        primary: true,
        default: undefined,
        nullable: false,
        onUpdate: () => null,
        onCreate: () => null,
      },
      {
        field: "createdAt",
        type: BurmType.DATETIME,
        key: false,
        primary: false,
        default: "(datetime('now', 'localtime'))",
        nullable: true,
        onUpdate: () => null,
        onCreate: () => null,
      },
      {
        field: "updatedAt",
        type: BurmType.DATETIME,
        key: false,
        primary: false,
        default: "(datetime('now', 'localtime'))",
        nullable: true,
        onUpdate: () => null,
        onCreate: () => null,
      }
    );

    for (const key in model) {
      // TODO: model is DataType.OBJECT

      columns.push({
        field: key,
        type: model[key],
        key: false,
        primary: false,
        default: undefined,
        nullable: true,
        onUpdate: () => null,
        onCreate: () => null,
      });
    }

    /*
     * TODO: map columns to object literal or equaly expression to generate dynamic model schemas
     * const _model = {} as const;
     * type Model = ModelSchema<typeof _model>;
     */

    const intermediate: ModelProps = {
      table,
      columns,
    };

    let parameters: string[] = [];
    columns.map(p => {
      let attribs = [
        p.primary !== undefined && p.primary ? "PRIMARY" : undefined,
        p.key !== undefined && p.key ? "KEY" : undefined,
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
