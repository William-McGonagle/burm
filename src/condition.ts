/**
 * We have multiple conditions which all need to run different code
 * in the database-wrapper. This is used to identify the conditions
 */
enum ConditionType {
    AND = 0,
    OR = 1,
    EQUALS = 2,
    NOT_EQUALS = 3,
    LESS_THAN = 4,
    GREATER_THAN = 5,
    LESS_THAN_OR_EQUAL_TO = 6,
    GREATER_THAN_OR_EQUAL_TO = 7
}

/**
 * This is an interface for any condition which will be processed later
 * in the database-wrapper
 */
interface Condition {
    type: ConditionType;
    parameter: any;
    value: any;
}

/**
 * This is a simple constructor for a condition
 * @param type this identifies the condition
 * @param parameter the first operand
 * @param value the second operand
 */
function createCondition(type: ConditionType, parameter: any, value: any): Condition {
    return {type, parameter, value}
}

export default {

    /**
     * This checks if 2 boolean values are true
     */
    and: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one of 2 boolean values is true
     */
    or: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one value equals another value
     */
    equals: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one value not equals another value
     */
    notEquals: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one number value is less than another number value
     */
    lessThan: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one number value is greater than another number value
     */
    greaterThan: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one number value is less than or equals another number value
     */
    lessThanOrEquals: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),

    /**
     * This checks if one number value is greater than or equals another number value
     */
    greaterThanOrEquals: (parameter: any, value: any) => createCondition(ConditionType.AND, parameter, value),
}