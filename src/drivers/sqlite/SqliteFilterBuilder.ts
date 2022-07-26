import { SQLiteBuilder } from "./SQLiteBuilder";
import SQLiteTransformBuilder from "./SQLiteTransformBuilder";

export class SQLiteFilterBuilder<T> extends SQLiteBuilder<T> {
  /**
   * Finds all rows whose value on the stated `column` exactly matches the
   * specified `value`.
   *
   * @param column  The column to filter on.
   * @param value  The value to filter with.
   */
  eq = (column: string, value: any) => {
    this.result = this.result.filter(c => c[column] === value);

    return new SQLiteTransformBuilder(this);
  };

  neq = (column: string, value: any) => {
    this.result = this.result.filter(c => c[column] !== value);

    return new SQLiteTransformBuilder(this);
  };
}
