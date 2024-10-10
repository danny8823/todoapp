import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/src/models/User";
import connectDB from "@/src/utils/dbConnect";

export async function POST(request) {
    connectDB();
    const {email,username,password} = await request.json()

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await User.create({
        email,
        username,
        password: hashedPassword
    })

    return new NextResponse(
        JSON.stringify(user)
    )
}