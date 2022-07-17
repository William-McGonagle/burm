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

export default {
    and,
    or,
    equals
};