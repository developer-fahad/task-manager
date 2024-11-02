import { NextResponse } from "next/server";

// Example works data
const works = [
  { id: 1, title: "Work 1", description: "Description of Work 1" },
  { id: 2, title: "Work 2", description: "Description of Work 2" },
  { id: 3, title: "Work 3", description: "Description of Work 3" },
];

export async function GET(request) {
  // Create a NextResponse object with the JSON data
  return NextResponse.json(works);
}

// You can also define other HTTP methods here if needed
export async function POST(request) {
  await request.param;
  // Handle creating a new work item using the provided data
  return NextResponse.json({ message: "data" }, { status: 201 });
}
