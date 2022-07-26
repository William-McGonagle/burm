/* The following types can be used when binding parameters:
 *
 * | JavaScript type | SQLite type |
 * | -------------- | ----------- |
 * | `string` | `TEXT` |
 * | `number` | `INTEGER` or `DECIMAL` |
 * | `boolean` | `INTEGER` (1 or 0) |
 * | `Uint8Array` | `BLOB` |
 * | `Buffer` | `BLOB` |
 * | `bigint` | `INTEGER` |
 * | `null` | `NULL` |
 */

const enum BurmType {
  TEXT = "TEXT",
  INTEGER = "INTEGER",
  BOOLEAN = "BOOLEAN",
  STRING = "STRING",
  SMALLINT = "SMALLINT",
  BIGINT = "BIGINT",
  DECIMAL = "DECIMAL",
  DATE = "DATE",
  TIME = "TIME",
  DATETIME = "DATETIME",
  DATETIMEZONE = "DATETIMEZONE",
  OBJECT = "OBJECT",
  ARRAY = "ARRAY",
  FLOAT = "FLOAT",
  GUID = "GUID",
  STREAM = "STREAM",
}

export default BurmType;
