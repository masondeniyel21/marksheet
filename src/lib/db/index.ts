import "server-only";

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "node:path";

import * as schema from "@/db/schema";

const sqlite = new Database(
  path.join(process.cwd(), "sqlite.db")
);

export const db = drizzle(sqlite, { schema });