import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import type { SiteContent } from "@/lib/content/types";

import { isAuthorized } from "@/lib/auth";
import { getContent, isBlobConfigured, saveContent } from "@/lib/content/store";
import { validateContent } from "@/lib/content/validate";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const result = await getContent();

  return NextResponse.json(
    { ...result, blobConfigured: isBlobConfigured(), authorized: isAuthorized(request) },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function PUT(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "未授權" }, { status: 401 });
  }
  if (!isBlobConfigured()) {
    return NextResponse.json(
      { error: "尚未設定 BLOB_READ_WRITE_TOKEN，無法寫入 Vercel Blob" },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON 格式錯誤" }, { status: 400 });
  }

  const errors = validateContent(body);

  if (errors.length > 0) {
    return NextResponse.json({ error: "資料格式不符", details: errors }, { status: 422 });
  }

  const blob = await saveContent(body as SiteContent);

  revalidatePath("/", "layout");

  return NextResponse.json({ ok: true, url: blob.url });
}
