import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ settings: {} });
}

export async function PUT(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: "Settings updated", data });
}
