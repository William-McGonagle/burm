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
        findAll: function (query) {

            return findAll(query, this)

        },
        create: function (query) {

            return create(query, this)

        },
        parameters: object,
        belongsTo: [],
        hasMany: []
    }

    factory[name] = intermediate;

    return intermediate

}

function localObjectCleaner() {

    

}

function findOne(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.findOne(queryObject, databaseObject);

}

function findAll(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.findAll(queryObject, databaseObject);

}

function create(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.create(queryObject, databaseObject);

}

function remove(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.remove(queryObject, databaseObject);

}

export default {
    register
};