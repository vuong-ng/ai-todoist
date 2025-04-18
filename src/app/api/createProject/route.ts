import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import generateTodoGuide from "@/lib/db/openai";
import { db } from "@/lib/db";
import { project } from "@/lib/db/schema";

export async function POST(request : Request) {
    // check if the user is authenticated
    const { userId } = await auth();
    if (userId == null) {
        // edit: redirect to log in page instead
        return NextResponse.json({ error: 'unauthenticated user' }, { status: 500 });
    }
    const request_body = await request.json();
    const { name, description } = request_body;
    const output = await generateTodoGuide(name);
    console.log('Task and Time lists', output);
    const project_id = await db.insert(project).values({ project_name: name, description: description }).returning({ insertedId: project.project_id });
    console.log(project_id)
    return NextResponse.json({project_id: project_id[0].insertedId});

}