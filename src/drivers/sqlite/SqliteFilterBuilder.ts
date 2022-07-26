import SQLiteTransformBuilder from "./SQLiteTransformBuilder";

export class SQLiteFilterBuilder<T> extends SQLiteTransformBuilder<T> {
  /**
   * Finds all rows whose value on the stated `column` exactly matches the
   * specified `value`.
   *
   * @param column  The column to filter on.
   * @param value  The value to filter with.
   */
  eq = (column: string, value: any) => {
    this.result = this.result.filter(c => c[column] === value);
  };
}
