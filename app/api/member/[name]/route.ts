import { NextResponse } from "next/server";

import { findMember, safeDecode, toApiMember } from "@/lib/content/members";
import { getContent } from "@/lib/content/store";

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const { content } = await getContent();

  return NextResponse.json(toApiMember(findMember(content, safeDecode(name))));
}
