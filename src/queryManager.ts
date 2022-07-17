import Sqlite from './databases/sqlite';

let currentLanguage = "SQLITE";
let factory = {};

function register(name, object) {

    let intermediate = {
        name,
        hasParameter: function (paramName) {

            return this.parameters[paramName] !== undefined
        
        },
        findOne: function (query) {

            return findOne(query, this)

        },
        parameters: object,
        belongsTo: [],
        hasMany: []
    }

    factory[name] = intermediate;

    return intermediate

}

function findOne(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.findOne(queryObject, databaseObject);

}

export default {
    register,
    findOne
};