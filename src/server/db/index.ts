import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

config({ path: ".env" }); // or .env.local

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { schema });
