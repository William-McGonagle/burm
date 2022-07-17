import DataType from "./dataType";
import QueryManager from "./queryManager";

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
    where: {
        id: 3
    }
}))