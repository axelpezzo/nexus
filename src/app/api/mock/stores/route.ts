import { delay } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await delay(2000);

  try {
    return Response.json({ status: 200 });
  } catch (e) {
    return Response.json({ status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await delay(2000);

  try {
    return Response.json({ status: 200 });
  } catch (e) {
    return Response.json({ status: 500 });
  }
}
