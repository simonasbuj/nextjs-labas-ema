import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

// export const mySchema = pgSchema("my_schema");

export const answers = pgTable("answers", {
    id: serial("id").primaryKey(),
    ip: text("ip").notNull(),
    answer: text("answer").default("taip").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const pageOpens = pgTable("page_opens", {
    id: serial("id").primaryKey(),
    ip: text("ip").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});