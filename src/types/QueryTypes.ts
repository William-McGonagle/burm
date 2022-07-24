import { ConditionProps } from "./Condition";

export interface FindOneQuery {
  where: ConditionProps;
}

export interface FindAllQuery {
  where: ConditionProps;
}
