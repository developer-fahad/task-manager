import Users from "@/models/users";
import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";

connectDB();

// Get single user
export async function GET(request, { params }) {
  const { userEmail } = params; // Correctly destructure userEmail from params
  console.log("Email is:", userEmail);

  try {
    const user = await Users.findOne({ email: userEmail }); // Use the correct property name
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user); // Ensure correct JSON response
  } catch (error) {
    console.log("Error fetching user:", error); // More specific error logging
    return NextResponse.json(
      { message: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
