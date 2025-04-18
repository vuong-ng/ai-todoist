import OpenAI from 'openai'
import 'dotenv/config'
// import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
})

const generateTodoGuide = async (req: string) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: `You are an strategic assitant that will help user plan their tasks based on their goal or project description.
                    Give plan for the given goals as a list of to-dos alongside with time duration for each task as follow:
                    Output sample:
                    tasks: [task1, task2, task3]
                    time: [time_duration_task1, time_duration_task2, time_duration_task3]`
                },
                {
                    role: 'user',
                    content: req,
                }
            ]
        });
        const data = response.choices[0].message.content;
        return data as string;
    } catch (error) {
        console.log(error);
    }
}

export default generateTodoGuide;