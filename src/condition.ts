function and(condition1, condition2) {



}

function or(condition1, condition2) {

    return {};

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