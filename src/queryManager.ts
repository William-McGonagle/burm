import Sqlite from './databases/sqlite';

let currentLanguage = "SQLITE";
let factory = {};

function register(name, databaseObject) {

    factory[name] = databaseObject;

}

function findOne(queryObject, databaseObject) {

    if (currentLanguage == "SQLITE") return Sqlite.findOne(queryObject, databaseObject);

}

export default {
    register,
    findOne
};