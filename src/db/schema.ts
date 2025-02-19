import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  officialDate: integer("official_date", { mode: "timestamp" }).notNull(),
  title: text("title").notNull(),
  department: text("department").notNull(),
  salary: text("salary").notNull(),
  lastDate: integer("last_date", { mode: "timestamp" }).notNull(),
  examName: text("exam_name").notNull(),
  vacancy: integer("vacancy").notNull(),
  location: text("location").notNull(),
  ageLimit: text("age_limit").notNull(),
  image: text("image"),
});

export const postsData = sqliteTable("posts_data", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  postId: integer("post_id")
    .references(() => posts.id)
    .notNull(),
  body: text("body").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fcmToken: text("fcm_token"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// Types inferred from the schema
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export type PostData = typeof postsData.$inferSelect;
export type NewPostData = typeof postsData.$inferInsert;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
