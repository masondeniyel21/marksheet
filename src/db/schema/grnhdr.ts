import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { serial, integer } from "drizzle-orm/pg-core";

export const grnhdr = pgTable("grnhdr", {
  id: serial("id").primaryKey(),
  grnno: integer("age"),           // Standard integer
  grndt: timestamp("grndt"),

  // name: varchar("name", { length: 255 }).notNull(),
  // email: varchar("email", { length: 255 }).notNull().unique(),
  // createdAt: timestamp("created_at").defaultNow().notNull(),
  // // id: serial('id').primaryKey(),
  // // code: text("code").notNull().unique(),
  // // name: text("name").notNull(),
  // id: uuid("id").defaultRandom().primaryKey(),
  // title: varchar("title", { length: 255 }).notNull(),
  // content: text("content").notNull(),
  // authorId: uuid("author_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  // createdAt: timestamp("created_at").defaultNow().notNull(),

});
