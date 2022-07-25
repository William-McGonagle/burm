import { Database } from "bun:sqlite";
import { ModelProps } from "./Model";

export interface SQLiteDriverProps {
  db: Database;
  register: () => ModelProps;
}
