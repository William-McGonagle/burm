import { ConditionProps, ConditionType } from "./types/Condition";

/**
 * This is a simple constructor for a condition
 * @param type this identifies the condition
 * @param parameter the first operand
 * @param value the second operand
 */
function createCondition(
  type: ConditionType,
  parameter: any,
  value: any
): ConditionProps {
  return { type, parameter, value };
}

export default {
  /**
   * This checks if 2 boolean values are true
   */
  and: (parameter: any, value: any) =>
    createCondition(ConditionType.AND, parameter, value),

  /**
   * This checks if one of 2 boolean values is true
   */
  or: (parameter: any, value: any) =>
    createCondition(ConditionType.OR, parameter, value),

  /**
   * This checks if one value equals another value
   */
  equals: (parameter: any, value: any) =>
    createCondition(ConditionType.EQUALS, parameter, value),

  /**
   * This checks if one value not equals another value
   */
  notEquals: (parameter: any, value: any) =>
    createCondition(ConditionType.NOT_EQUALS, parameter, value),

  /**
   * This checks if one number value is less than another number value
   */
  lessThan: (parameter: any, value: any) =>
    createCondition(ConditionType.LESS_THAN, parameter, value),

  /**
   * This checks if one number value is greater than another number value
   */
  greaterThan: (parameter: any, value: any) =>
    createCondition(ConditionType.GREATER_THAN, parameter, value),

  /**
   * This checks if one number value is less than or equals another number value
   */
  lessThanOrEquals: (parameter: any, value: any) =>
    createCondition(ConditionType.LESS_THAN_OR_EQUAL_TO, parameter, value),

  /**
   * This checks if one number value is greater than or equals another number value
   */
  greaterThanOrEquals: (parameter: any, value: any) =>
    createCondition(ConditionType.GREATER_THAN_OR_EQUAL_TO, parameter, value),
};
