import { API_STATUS } from "@/config/settings";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    return Response.json({ status: API_STATUS.CREATED });
  } catch (e) {
    return Response.json({ status: API_STATUS.BAD_GATEWAY });
  }
}
