import { NextResponse } from "next/server";
import User from "@/src/models/User";
import connectDB from "@/src/utils/dbConnect";

export async function POST(request) {
    connectDB();
    const data = await request.json()
    const user = await User.create(data)

    return new NextResponse(
        JSON.stringify(user)
    )
}