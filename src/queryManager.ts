import Sql from './databases/sql/index';
import Sqlite from './databases/sqlite/index';

let currentLanguage = "SQLITE";
let factory = {};

function register(name, object) {

    let parameters = { };

    for (const key in object) {
        
        if (typeof object[key] == 'string') {

            

        } else if (typeof object[key] == 'object') {



        }

    }

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
        remove: function (query) {

            return remove(query, this);

        },
        clear: function (query) {

            return clear(query, this);

        },
        parameters,
        belongsTo: [],
        hasMany: []
    }

    initializeModel({}, intermediate);

    factory[name] = intermediate;

    return intermediate

}

function localObjectCleanser(instanceObject) {

    return {
        ...instanceObject,

    };

}

function customQuery(customQueryText) {

    if (currentLanguage == "SQLITE") return Sqlite.customQuery(customQueryText);
    if (currentLanguage == "SQL")    return Sql.customQuery(customQueryText);

}

function initializeModel(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.initializeModel(queryObject, databaseObject);
    if (currentLanguage == "SQL")    return Sql.initializeModel(queryObject, databaseObject);

}

function findOne(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.findOne(queryObject, databaseObject);
    if (currentLanguage == "SQL")    return Sql.findOne(queryObject, databaseObject);

}

function findAll(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.findAll(queryObject, databaseObject);
    if (currentLanguage == "SQL")    return Sql.findAll(queryObject, databaseObject);

}

function create(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.create(queryObject, databaseObject);
    if (currentLanguage == "SQL")    return Sql.create(queryObject, databaseObject);

}

function remove(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.remove(queryObject, databaseObject);
    if (currentLanguage == "SQL")    return Sql.remove(queryObject, databaseObject);
        
}

function clear(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.clear(queryObject, databaseObject);
    if (currentLanguage == "SQL")    return Sql.clear(queryObject, databaseObject);

}

export default {
    register,
    customQuery
};