import { NextResponse } from "next/server";

export async function GET(request){
    return new NextResponse(JSON.stringify({
        message: 'Fetching single todos'
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