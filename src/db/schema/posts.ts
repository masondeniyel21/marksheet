import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { serial, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    content: text("content"),
    authorId: integer("author_id").references(() => users.id),
  });

export const posts1 = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  authorId: uuid("author_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});  