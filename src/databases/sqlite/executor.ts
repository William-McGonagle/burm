import { Database } from "bun:sqlite";

const db = new Database(":memory:");

export default function executeDatabaseQuery(queryText) {

    console.log(queryText);
    console.log(db.query(queryText).all());

}