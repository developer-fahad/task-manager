import { connectDB } from "@/helper/db";
import Works from "@/models/works";
import { NextResponse } from "next/server";
connectDB();


// Get all works
export async function GET(request) {
  const works = await Works.find();
  return NextResponse.json(works);
}



// You can also define other HTTP methods here if needed
export async function POST(request) {
  await request.param;
  return NextResponse.json({ message: "data" }, { status: 201 });
}
