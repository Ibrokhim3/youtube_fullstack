import pg from "pg";
import knex from "knex";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "youtube",
  password: "2626",
  port: process.env.PORT_POSTGRES,
});

// Create database object
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "2626",
    database: "youtube",
  },
});

export { pool, db };
