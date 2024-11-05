import { connectDB } from "@/helper/db";
import Works from "@/models/works";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const { workId } = await params;
  const work = await Works.findById(workId);
  if (!work) {
    return NextResponse.json({ message: "Work not found" }, { status: 404 });
  }
  return NextResponse.json(work);
}
