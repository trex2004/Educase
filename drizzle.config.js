import { defineConfig } from 'drizzle-kit';
import "dotenv/config"

let dbCredentials = {
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

export default defineConfig({
  schema: './model/dbSchema.js',
  out: './model/migration',
  dialect: 'mysql',
  dbCredentials: dbCredentials,
  verbose: true,
  strict: true
});