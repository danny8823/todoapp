import { NextResponse } from "next/server";
import Todo from "@/src/models/Todo";
import connectDB from "@/src/utils/dbConnect";

export async function GET(request){
    connectDB();
    const todo = await Todo.find()

    return new NextResponse(
        JSON.stringify(todo)
    )
}

export async function POST(request) {
    connectDB();
    const data = await request.json()
    const todo = await Todo.create(data)

    return new NextResponse(
        JSON.stringify(todo)
    )
}

