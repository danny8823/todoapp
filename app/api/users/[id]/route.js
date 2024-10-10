import { NextResponse } from "next/server";
import User from "@/src/models/User";
import connectDB from "@/src/utils/dbConnect";

export async function GET(request,{params}) {
    connectDB()

    const user = await User.findOne(params.email)

    return new NextResponse(
        JSON.stringify(user)
    )
}

export async function DELETE(request, {params}) {
    connectDB()

    const user = await User.findByIdAndDelete(params.id)

    return new NextResponse(
        JSON.stringify(user)
    )
}

export async function PUT(request, {params}) {
    connectDB()

    const data = await request.json()
    const user = await User.findByIdAndUpdate(params.id, data, {
        new: true
    })

    return new NextResponse(
        JSON.stringify(user)
    )
}
