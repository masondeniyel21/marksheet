import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { serial, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  });

  export const users1 = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name"),
  });