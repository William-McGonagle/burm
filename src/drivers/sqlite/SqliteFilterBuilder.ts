import SQLiteTransformBuilder from "./SQLiteTransformBuilder";

export class SQLiteFilterBuilder<T> extends SQLiteTransformBuilder<T> {
  /* TODO
   * expected: should `return this;` to allow for more method chaining
   * current behaviour: returns the filtered result
   */
  eq = (column: string, value: any): this => {
    this.result = this.result.filter(c => c[column] === value);
    return this;
  };
}
