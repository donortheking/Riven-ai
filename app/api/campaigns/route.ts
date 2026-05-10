import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ campaigns: [] });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: "Campaign created", data }, { status: 201 });
}
