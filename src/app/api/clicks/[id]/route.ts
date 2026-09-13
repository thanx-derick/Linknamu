import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const client = await clientPromise;
  const collection = client
    .db()
    .collection<{ _id: string; count: number }>("linkClicks");

  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
