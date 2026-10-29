import { relations } from "drizzle-orm";
import { users } from "./users";
import { posts } from "./posts";
import { grnhdr } from "./grnhdr";
import { grndtl } from "./grndtl";

// 1 User can have many Posts
// export const usersRelations = relations(users, ({ many }) => ({
//   posts: many(posts),
// }));

// 1 Post belongs to 1 User
// export const postsRelations = relations(posts, ({ one }) => ({
//   author: one(users, {
//     fields: [posts.authorId],
//     references: [users.id],
//   }),
// }));

// 1 grnhdr can have many grndtl lineitems
export const grnhdrRelations = relations(grnhdr, ({ many }) => ({
  grndtl: many(grndtl),
}));

// 1 grndtl belongs to 1 grnhdr
export const grndtlRelations = relations(grndtl, ({ one }) => ({
  grn: one(grnhdr, {
    fields: [grndtl.grnhdrId],
    references: [grnhdr.id],
  }),
}));

// export default async function Page() {
//   const usersWithPosts = await db.query.users.findMany({
//     with: {
//       posts: true, // Autocomplete will work here!
//     },
//   });

//   return (
//     // Your UI JSX
//   );
// }
