import { SQLiteBuilder } from "./SQLiteBuilder";

export default class SQLiteTransformBuilder<T> extends SQLiteBuilder<T> {
  /**
   * Performs vertical filtering with SELECT.
   *
   * @param columns  The columns to retrieve, separated by commas.
   */
  select = (columns = "*"): this => {
    this.result = this.db
      .query(`SELECT ${columns.split("").join(", ")} from ${this.table}`)
      .all();

    return this;
  };

  single = () => {
    return this.result[0];
  };
}
