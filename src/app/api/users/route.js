import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
connectDB();
export function GET(request) {
    const users = [
      {
        name: "Mohibur",
        id: "1",
        isActive: true,
        age: "28",
      },
      {
        name: "Mohibur Rahman",
        id: "2",
        isActive: false,
        age: "28",
      },
      {
        name: "Mohibur Rahman Fahad",
        id: "3",
        isActive: true,
        age: "28",
      },
    ];
    console.log(users);
    return NextResponse.json(users)
}