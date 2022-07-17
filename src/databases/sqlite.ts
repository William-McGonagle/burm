function findOne(queryObject, databaseObject) {

    return `SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""} LIMIT 1`;

}

function findAll(queryObject, databaseObject) {

    return `SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""}`;

}

function create(queryObject, databaseObject) {

    let params:Array<string> = [];
    let values:Array<string> = [];

    for (const key in queryObject) {
        
        params.push(key);
        values.push(`"${queryObject[key]}"`);

    }

    return `INSERT INTO ${databaseObject.name}(${params.join(', ')}) VALUES (${values.join(', ')})`;

}

function remove(queryObject, databaseObject) {

    if (queryObject.where == undefined) return "";

    return `DELETE FROM ${databaseObject.name} WHERE ${processCondition(queryObject.where)}`;

}

function clear(queryObject, databaseObject) {

    return `DELETE FROM ${databaseObject.name}`;

}

function processCondition(conditionObject) {

    if (conditionObject.type == undefined) return "";

    if (conditionObject.type == "EQUALS") {

        return `${conditionObject.parameter} = "${conditionObject.value}"`;
        
    }

    if (conditionObject.type == "AND") {

        return `${processCondition(conditionObject.a)} AND ${processCondition(conditionObject.b)}`;
        
    }

    if (conditionObject.type == "OR") {

        return `${processCondition(conditionObject.a)} OR ${processCondition(conditionObject.b)}`;
        
    }

    if (conditionObject.type == "NOT_EQUALS") {

        return `${conditionObject.parameter} != ${conditionObject.value}`;

    }

    if (conditionObject.type == "LESS_THAN") {

        return `${conditionObject.parameter} < ${conditionObject.value}`;

    }

    if (conditionObject.type == "GREATER_THAN") {

        return `${conditionObject.parameter} > ${conditionObject.value}`;

    }

    if (conditionObject.type == "LESS_THAN_OR_EQUAL_TO") {

        return `${conditionObject.parameter} <= ${conditionObject.value}`;

    }

    if (conditionObject.type == "GREATER_THAN_OR_EQUAL_TO") {

        return `${conditionObject.parameter} >= ${conditionObject.value}`;

    }

    return "";

}

export default {
    findOne,
    findAll,
    create,
    remove,
    clear
};