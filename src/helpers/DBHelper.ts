import mysql from "mysql2";
import "dotenv/config";

const db_pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
    queueLimit: Number(process.env.DB_QUEUE_LIMIT),
  })
  .promise();

export { db_pool };
