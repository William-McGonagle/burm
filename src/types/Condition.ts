/**
 * We have multiple conditions which all need to run different code
 * in the database-wrapper. This is used to identify the conditions
 */
export enum ConditionType {
  AND,
  OR,
  EQUALS,
  NOT_EQUALS,
  LESS_THAN,
  GREATER_THAN,
  LESS_THAN_OR_EQUAL_TO,
  GREATER_THAN_OR_EQUAL_TO,
}

/**
 * This is an interface for any condition which will be processed later
 * in the database-wrapper
 */
export interface ConditionProps {
  type: ConditionType;
  parameter: ConditionProps | string;
  value: ConditionProps | any;
}
