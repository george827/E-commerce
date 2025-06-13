import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        console.log("User registered:", { name, email, password });

        return NextResponse.json({
            message: "User registered successfully"}, {
            status: 201,});

    }
    catch (error){
        return NextResponse.json({
            error: "Failed to register user",
        }, {
            status: 500,
        });

    }
}