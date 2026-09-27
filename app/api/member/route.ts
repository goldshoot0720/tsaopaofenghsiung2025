import { NextResponse } from "next/server";

import { toApiMember } from "@/lib/content/members";
import { getContent } from "@/lib/content/store";

export async function GET() {
  const { content } = await getContent();

  return NextResponse.json({ member: content.members.list.map(toApiMember) });
}
