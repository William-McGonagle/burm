import DataType from "./dataType";
import QueryManager from "./queryManager";
import Condition from "./condition";

// Allowed Databases
// - MongoDB
// - Sqlite
// - SQL
// - PostgreSQL
// - Casandra

console.log(
    QueryManager.register('User', {
        firstname: DataType.TEXT,
        lastname: DataType.TEXT
    }
).findOne({
    where: Condition.and(
        Condition.equals("firstname", "William"),
        Condition.equals("lastname", "William")
    )
}))