function and(condition1, condition2) {

    return {
        type: "AND",
        a: condition1,
        b: condition2
    };

}

function or(condition1, condition2) {

    return {
        type: "OR",
        a: condition1,
        b: condition2
    };

}

function equals(parameter, value) {

    return {
        type: "EQUALS",
        parameter,
        value
    };

}

function notEquals(parameter, value) {

    return {
        type: "NOT_EQUALS",
        parameter,
        value
    };

}

function lessThan(parameter, value) {

    return {
        type: "LESS_THAN",
        parameter,
        value
    };

}

function greaterThan(parameter, value) {

    return {
        type: "GREATER_THAN",
        parameter,
        value
    };

}

function lessThanOrEqualTo(parameter, value) {

    return {
        type: "LESS_THAN_OR_EQUAL_TO",
        parameter,
        value
    };

}

function greaterThanOrEqualTo(parameter, value) {

    return {
        type: "GREATER_THAN_OR_EQUAL_TO",
        parameter,
        value
    };

}

export default {
    and,
    or,
    equals,
    notEquals,
    lessThan,
    greaterThan,
    lessThanOrEqualTo,
    greaterThanOrEqualTo
};