import "server-only";
import pg from "pg";

const { Pool } = pg;

const globalForPg = globalThis;

export const db =
  globalForPg.addisEatsPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: true }
        : false,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPg.addisEatsPool = db;
}
