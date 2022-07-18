import Sql from './databases/sql/index';
import Sqlite from './databases/sqlite/index';

import DataType from './dataType';

let currentLanguage = "SQLITE";
let factory = {};

function register(name, object) {

    let parameters = { };

    parameters["id"] = {
        type: DataType.INTEGER,
        key: true,
        primary: true,
        default: null,
        nullable: true,
        onUpdate: () => { null },
        onCreate: () => { null }
    };

    parameters["createdAt"] = {
        type: DataType.DATETIME,
        key: false,
        primary: false,
        default: null,
        nullable: true,
        onUpdate: () => { null },
        onCreate: () => { null }
    };

    parameters["updatedAt"] = {
        type: DataType.DATETIME,
        key: false,
        primary: false,
        default: null,
        nullable: true,
        onUpdate: () => { null },
        onCreate: () => { null }
    };

    for (const key in object) {
        
        if (typeof object[key] == 'string') {

            parameters[key] = {
                type: object[key],
                key: false,
                primary: false,
                default: null,
                nullable: true,
                onUpdate: () => { null },
                onCreate: () => { null }
            };

        } else if (typeof object[key] == 'object') {

            parameters[key] = { 
                type: DataType.OBJECT,
                key: false,
                primary: false,
                default: null,
                nullable: true,
                onUpdate: () => { null },
                onCreate: () => { null },
                ...object[key]
            };

        }

    }

    const intermediate = {
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

    factory[name] = intermediate;
    initializeModel({}, intermediate);

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