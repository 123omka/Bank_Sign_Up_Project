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


// await db.execute(`CREATE TABLE personal_info (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   first_name VARCHAR(100),
//   last_name VARCHAR(100),
//   dob DATE,
//   gender VARCHAR(20),
//   id_type VARCHAR(50),
//   id_number VARCHAR(100),
//   country VARCHAR(100),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`);

// await db.execute(`CREATE TABLE address_info (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   street VARCHAR(255) NOT NULL,
//   suburb VARCHAR(100) NOT NULL,
//   city VARCHAR(100) NOT NULL,
//   postalCode VARCHAR(20) NOT NULL,
//   province VARCHAR(100) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
// `);

// await db.execute(`CREATE TABLE contact_employment (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   email VARCHAR(255),
//   employer VARCHAR(255) NOT NULL
// );
//  `)
// await  db.execute(`CREATE TABLE documents (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   id_proof VARCHAR(255),
//   address_proof VARCHAR(255),
//   work_permit VARCHAR(255),
//   issue_date DATE,
//   expiry_date DATE,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`)
// await db.execute(`
//   ALTER TABLE personal_info
//   ADD COLUMN user_id INT NOT NULL;
// `);
// await db.execute(`
//   ALTER TABLE personal_info
//   ADD CONSTRAINT fk_personal_user
//   FOREIGN KEY (user_id) REFERENCES users(id)
//   ON DELETE CASCADE;
// `);
// await db.execute(`CREATE TABLE IF NOT EXISTS users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   phone VARCHAR(20) NOT NULL UNIQUE,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`
// );
await db.execute(`dele`)
console.log("table created sucessfully")
export default db;