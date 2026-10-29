import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { serial, integer } from "drizzle-orm/pg-core";

export const item = pgTable("item", {
    // id: text("id").primaryKey(),  
    id: serial('id').primaryKey(),
    code: text("code").notNull().unique(),
    name: text("name").notNull(),  
  });