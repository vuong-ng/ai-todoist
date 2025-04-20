
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { project } from '@/lib/db/schema';
import {and, eq} from 'drizzle-orm'

export const POST = async (req: Request) => {
    const userId = await auth();
    
    if (userId == null) {
        return NextResponse.json({ status: 200 });
    }
    const data = await req.json();
    const delete_project = await db.delete(project)
        .where(and(eq(project.project_id, parseInt(data.project_id)), eq(project.user_id, data.user_id)))
        .returning();
    return NextResponse.json(delete_project, {status: 200});
}