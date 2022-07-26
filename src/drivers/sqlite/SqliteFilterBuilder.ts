import { ColumnProps } from "../../types/Column";

export class SQLiteFilterBuilder {
  private result: Array<ColumnProps> = [];

  constructor(result: Array<ColumnProps>) {
    this.result = result;
  }

  /* TODO
   * expected: should `return this;` to allow for more method chaining
   * current behaviour: returns the filtered result
   */
  eq = (column: string, value: any) => {
    return this.result.filter(c => c[column] === value);
  };
}
