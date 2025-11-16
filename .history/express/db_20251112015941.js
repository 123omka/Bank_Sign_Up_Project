import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

console.log("📦 MySQL Connected");

// await db.execute(`create database otp_system`)
// await db.execute(`CREATE TABLE users_otp (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   phone VARCHAR(20) NOT NULL,
//   otp VARCHAR(10) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   expires_at DATETIME NOT NULL
// );
// `);
console.log("table created sucessfully")
await db.execute(`select fr`)
export default db;