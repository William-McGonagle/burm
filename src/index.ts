import DataType from "./dataType";
import QueryManager from "./queryManager";
import Condition from "./condition";

// Allowed Databases
// - MongoDB
// - Sqlite
// - SQL
// - PostgreSQL
// - Casandra

export function Register(name, object) {

    let intermediate = {
        name,
        hasParameter: function (paramName) {

            return this.parameters[paramName] !== undefined
        
        },
        findOne: function (query) {

            return QueryManager.findOne(query, this)

        },
        parameters: object,
        belongsTo: [],
        hasMany: []
    }

    QueryManager.register(name, intermediate)

    return intermediate

}

console.log(
    Register('User', {
        firstname: DataType.TEXT,
        lastname: DataType.TEXT
    }
).findOne({
    where: Condition.and(
        Condition.equals("firstname", "William"),
        Condition.equals("lastname", "William")
    )
}))