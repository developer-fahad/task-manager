import { connectDB } from "@/helper/db";
import Users from "@/models/users";
import { NextResponse } from "next/server";
connectDB();

// Get all users
export async function GET(request) {
  try {
    const users = await Users.find();
    return NextResponse.json(users); // Proper JSON formatting
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

