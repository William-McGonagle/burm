import { ConditionProps, ConditionType } from "../../types/Condition";

export default function processCondition(
  condition: ConditionProps
): ConditionProps | string {
  switch (condition.type) {
    case ConditionType.EQUALS:
      return `${condition.parameter} = "${condition.value}"`;

    case ConditionType.AND:
      return `${processCondition(condition.parameter)} AND ${processCondition(
        condition.value
      )}`;

    case ConditionType.OR:
      return `${processCondition(condition.parameter)} OR ${processCondition(
        condition.value
      )}`;

    case ConditionType.NOT_EQUALS:
      return `${condition.parameter} != ${condition.value}`;

    case ConditionType.LESS_THAN:
      return `${condition.parameter} < ${condition.value}`;

    case ConditionType.GREATER_THAN:
      return `${condition.parameter} > ${condition.value}`;

    case ConditionType.LESS_THAN_OR_EQUAL_TO:
      return `${condition.parameter} <= ${condition.value}`;

    case ConditionType.GREATER_THAN_OR_EQUAL_TO:
      return `${condition.parameter} >= ${condition.value}`;

    default:
      return condition;
  }
}
