import DataType from "./dataType";
import QueryManager from "./queryManager";
import Condition from "./condition";

// Allowed Databases
// - MongoDB
// - Sqlite
// - SQL
// - PostgreSQL
// - Casandra

const User = QueryManager.register('User', {
    firstname: DataType.TEXT,
    lastname: DataType.TEXT
});

export default QueryManager;
export {
    DataType,
    Condition
};