import { drizzle } from "drizzle-orm/mysql2"
import * as schema from "../model/dbSchema.js"
import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

const credentials = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    ca: process.env.DB_SSL_CA,
    rejectUnauthorized: true
  }
}

const dbConnection = await mysql.createConnection(credentials)

const db = drizzle(dbConnection, { schema, mode: "default", logger: true })

export default db