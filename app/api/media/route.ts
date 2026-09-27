import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

import { isAuthorized } from "@/lib/auth";
import { isBlobConfigured } from "@/lib/content/store";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "未授權" }, { status: 401 });
  }
  if (!isBlobConfigured()) return NextResponse.json({ blobs: [] });

  const { blobs } = await list({ prefix: "uploads/", limit: 200 });

  blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());

  return NextResponse.json({
    blobs: blobs.map(({ url, pathname, size, uploadedAt }) => ({ url, pathname, size, uploadedAt })),
  });
}
