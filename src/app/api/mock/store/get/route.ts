import { NextRequest } from "next/server";
import { mockData } from "./mock-data";
import { API_STATUS } from "@/config/settings";

export async function GET(request: NextRequest) {
  try {
    return Response.json({ status: API_STATUS.OK, data: mockData });
  } catch (e) {
    return Response.json({ status: API_STATUS.NO_CONTENT });
  }
}
