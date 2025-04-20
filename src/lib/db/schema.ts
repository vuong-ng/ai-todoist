import * as t from 'drizzle-orm/pg-core';

export const task = t.pgTable('todos', {
    task_id: t.serial('id').primaryKey(),
    name: t.text('task_name'),
    description: t.text('description'),
    project_id: t.integer('project_id').references((): t.AnyPgColumn => project.project_id),
    user_id: t.integer('user_id').notNull(),
    status:t.varchar({length:255}),
    editor_state: t.text('editor_state'),
    created_at: t.timestamp('created_at').notNull().defaultNow(),
    notification_type: t.varchar({ length: 256 }),
    notification_time: t.timestamp({precision:6, withTimezone:true})
})

export const project = t.pgTable('project', {
    project_id: t.serial('project_id').primaryKey(),
    user_id : t.text('user_id').notNull(),
    project_name: t.varchar('project_name', { length: 256 }),
    description:t.text('description')
})

export type TaskType = typeof task.$inferInsert;
export type ProjectType = typeof project.$inferInsert;