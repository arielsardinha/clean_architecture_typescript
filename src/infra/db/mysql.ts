import mysql from "mysql2/promise";

export async function connect(): Promise<mysql.Connection> {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Paiol729",
    database: "clean_arch",
  });
}
