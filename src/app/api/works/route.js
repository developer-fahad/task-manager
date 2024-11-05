import { connectDB } from "@/helper/db";
import Works from "@/models/works";
import { NextResponse } from "next/server";
connectDB();

// Get all works
export async function GET(request) {
  const works = await Works.find();
  return NextResponse.json(works);
}

export async function POST(request) {
  const { title, description, email, author } = await request.json();

  // Validation (optional, but recommended)
  if (!title || !description || !email || !author) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const work = await Works.create({ title, description, email, author });
    return NextResponse.json(work);
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating work", error: error.message },
      { status: 500 }
    );
  }
}
