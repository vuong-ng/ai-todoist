import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { project, task } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

import React from 'react'

export async function POST(req: Request) {
    try {
        const body = await req.json();
        let { userId, editorValue, project_id, task_id } = body;
        if (!editorValue || !project_id) {
            return new NextResponse("Missing editor value or project id", { status: 400 });
        }

        project_id = parseInt(project_id);
        const projects = await db.select().from(project).where(and(eq(project.project_id, project_id), eq(project.user_id, userId)));
        if (projects.length != 1) {
            return new NextResponse("Failed to update project", { status: 500 });
        }

        const thisProject = projects[0];
        const task_update = await db.select().from(task).where(and(eq(task.task_id, task_id), eq(task.project_id, project_id), eq(task.user_id, userId)));
        if (task_update.length != 1) {
            await db.insert(task).values({ task_id: task_id, project_id: thisProject.project_id, user_id: userId });
        }
        else {
            await db.update(task).set({ description: editorValue }).where(and(eq(task.task_id, task_id), eq(task.project_id, project_id), eq(task.user_id, userId)));
        }
        return NextResponse.json({
            success: true,
        },
            { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
        }, { status: 500 }
        );
    }
}