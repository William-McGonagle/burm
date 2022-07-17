function findOne(queryObject, databaseObject) {

    return `SELECT * FROM ${databaseObject.name};`;

}

export default {
    findOne
};