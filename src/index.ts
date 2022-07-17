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

let userCreateQuery = User.create({
    firstname: "William",
    lastname: "McGonagle"
});

let userSearchQuery = User.findAll({
    where: Condition.and(
        Condition.equals("firstname", "William"),
        Condition.equals("lastname", "McGonagle")
    )
});

export default QueryManager;
export {
    DataType,
    Condition
};