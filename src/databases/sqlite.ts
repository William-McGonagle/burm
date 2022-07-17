function findOne(queryObject, databaseObject) {

    return `SELECT * FROM ${databaseObject.name}${(queryObject.where !== undefined) ? ` WHERE ${processCondition(queryObject.where)}` : ""}`;

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

    return "";

}

export default {
    findOne
};