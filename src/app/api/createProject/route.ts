import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(request : Request) {
    // check if the user is authenticated
    const { userId } = auth();
    if (userId == null) {
        // edit: redirect to log in page instead
        return NextResponse.json({ error: 'unauthenticated user' }, { status: 500 });
    }
    const request_body = await request.json();
    const { project_name } = request_body;
}