export default function processCondition(conditionObject) {

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