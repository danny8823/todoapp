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

export async function DELETE(request) {
    return new NextResponse(JSON.stringify({
        message: 'DELETE todo'
    }))
}

export async function PUT(request) {
    return new NextResponse(JSON.stringify({
        message: 'Update todo'
    }))
}