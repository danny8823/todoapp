import { NextResponse } from "next/server";

export async function GET(request){
    return new NextResponse(JSON.stringify({
        message: 'Fetching all todos'
    }))
}

export async function POST(request) {
    return new NextResponse(JSON.stringify({
        message: 'Posting todo'
    }))
}

