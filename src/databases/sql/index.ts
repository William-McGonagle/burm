import processCondition from "./condition";
import executeDatabaseQuery from "./executor";

function initializeModel(queryObject, databaseObject) {


    
}

function findOne(queryObject, databaseObject) {

    executeDatabaseQuery(`SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""} LIMIT 1`);

}

function findAll(queryObject, databaseObject) {

    executeDatabaseQuery(`SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""}`);

}

function create(queryObject, databaseObject) {

    let params:Array<string> = [];
    let values:Array<string> = [];

    for (const key in queryObject) {
        
        params.push(key);
        values.push(`"${queryObject[key]}"`);

    }

    executeDatabaseQuery(`INSERT INTO ${databaseObject.name}(${params.join(', ')}) VALUES (${values.join(', ')})`);

}

function remove(queryObject, databaseObject) {

    if (queryObject.where == undefined) return "";

    executeDatabaseQuery(`DELETE FROM ${databaseObject.name} WHERE ${processCondition(queryObject.where)}`);

}

function clear(queryObject, databaseObject) {

    executeDatabaseQuery(`DELETE FROM ${databaseObject.name}`);

}

function customQuery(customQueryText) {

    executeDatabaseQuery(customQueryText);

}

export default {
    findOne,
    findAll,
    create,
    remove,
    clear,
    customQuery,
    initializeModel
};