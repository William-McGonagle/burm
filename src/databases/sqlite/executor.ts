import { Database } from "bun:sqlite";

const db = new Database(":memory:");

export const executeDatabaseQuery = (query: string) => db.query(query).all();
