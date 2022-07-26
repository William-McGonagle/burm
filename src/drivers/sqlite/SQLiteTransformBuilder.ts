import { SQLiteBuilder } from "./SQLiteBuilder";

export default class SQLiteTransformBuilder<T> extends SQLiteBuilder<T> {
  /**
   * Retrieves all rows of the result.
   */
  all = () => {
    return this.result;
  };

  /**
   * Retrieves only one the first row of the result.
   */
  single = () => {
    return this.result[0];
  };
}
