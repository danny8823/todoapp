import connectDB from "@/src/utils/dbConnect";
import User from "@/src/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB()
        const {email} = await request.json()
        const user = await User.findOne(
            {email}
        ).select('_id')

        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}