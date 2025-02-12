import { API_STATUS } from "@/config/settings";
import { NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ status: API_STATUS.NOT_FOUND });
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`Simulated deletion of item with ID: ${id}`);

    return NextResponse.json({ status: API_STATUS.OK, data: { id } });
  } catch (error) {
    return NextResponse.json({ status: API_STATUS.BAD_GATEWAY, data: { id } });
  }
}
