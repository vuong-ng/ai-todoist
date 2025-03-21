import { integer, pgTable, varchar, text, timestamp,serial } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    description: text('description').notNull(),
    topic: varchar({ length: 255 }),
    userId: integer('userId').notNull(),
    status:varchar({length:255}),
    editor_state: text('editor_state'),
    created_at:timestamp('created_at').notNull().defaultNow()
})

export type TodoType = typeof todos.$inferInsert;