import processCondition from "./condition";
import executeDatabaseQuery from "./executor";

function initializeModel(queryObject, databaseObject) {

    let parameters = [
        `id INT PRIMARY KEY`
    ];

    for (const key in databaseObject.parameters) {
        
        parameters.push(`${key} ${databaseObject.parameters[key].type}`);

    }

    executeDatabaseQuery(`CREATE TABLE IF NOT EXISTS ${databaseObject.name} (${parameters.join(', ')});`);

}

function findOne(queryObject, databaseObject) {

    executeDatabaseQuery(`SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""} LIMIT 1;`);

}

function findAll(queryObject, databaseObject) {

    executeDatabaseQuery(`SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""};`);

}

function create(queryObject, databaseObject) {

    let params:Array<string> = [];
    let values:Array<string> = [];

    for (const key in queryObject) {
        
        params.push(key);
        values.push(`"${queryObject[key]}"`);

    }

    executeDatabaseQuery(`INSERT INTO ${databaseObject.name}(${params.join(', ')}) VALUES (${values.join(', ')});`);

}

function remove(queryObject, databaseObject) {

    if (queryObject.where == undefined) return { };

    executeDatabaseQuery(`DELETE FROM ${databaseObject.name} WHERE ${processCondition(queryObject.where)};`);

}

function clear(queryObject, databaseObject) {

    executeDatabaseQuery(`DELETE FROM ${databaseObject.name};`);

}

function customQuery(customQueryText) {

    executeDatabaseQuery(customQueryText);

}

export default {
    initializeModel,
    findOne,
    findAll,
    create,
    remove,
    clear,
    customQuery
};