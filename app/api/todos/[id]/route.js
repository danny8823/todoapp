import { NextResponse } from "next/server";
import Todo from "@/src/models/Todo";
import connectDB from "@/src/utils/dbConnect";

export async function GET(request,{params}){
    connectDB()
    console.log('id', params)
    const todo = await Todo.find({
        user: params.id
    })


    return new NextResponse(
        JSON.stringify(todo)
    )
}

export async function DELETE(request,{params}) {
    connectDB()

    const todo = await Todo.findByIdAndDelete(params.id)

    return new NextResponse(
        JSON.stringify(todo)
    )
}

export async function PUT(request,{params}) {
    connectDB()
    const data = await request.json()
    const todo = await Todo.findByIdAndUpdate(params.id,data,{new: true})

    return new NextResponse(
        JSON.stringify(todo)
    )
}