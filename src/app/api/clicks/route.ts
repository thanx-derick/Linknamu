import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const collection = client
    .db()
    .collection<{ _id: string; count: number }>("linkClicks");

  const docs = await collection.find({}).toArray();
  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count ?? 0;
  }

  return NextResponse.json(counts);
}
