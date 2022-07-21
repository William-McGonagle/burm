import { Database } from "bun:sqlite";

const db = new Database(":memory:");

export default function executeDatabaseQuery(queryText) {
  // In future, use variables (denoted with dollar signs) and all function

  console.log(queryText);
  return db.query(queryText).all();
}
