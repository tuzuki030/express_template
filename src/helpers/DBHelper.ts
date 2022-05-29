import mysql from "mysql2";
import "dotenv/config";

const db_connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

export { db_connection };
