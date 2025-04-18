import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import generateTodoGuide from "@/lib/db/openai";

export async function POST(request : Request) {
    // check if the user is authenticated
    const { userId } = await auth();
    if (userId == null) {
        // edit: redirect to log in page instead
        return NextResponse.json({ error: 'unauthenticated user' }, { status: 500 });
    }
    const request_body = await request.json();
    const { name } = request_body;
    const output = await generateTodoGuide(name);
    console.log('Task and Time lists', output);
    return new NextResponse('ok');
}