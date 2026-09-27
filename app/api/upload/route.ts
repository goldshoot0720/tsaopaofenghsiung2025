import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

import { isAdminToken } from "@/lib/auth";

// 瀏覽器直接上傳到 Vercel Blob（不經過 serverless 4.5MB 限制），
// 這裡只負責驗證管理密鑰並簽發一次性上傳 token。
export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        if (!isAdminToken(clientPayload)) throw new Error("未授權");
        if (!pathname.startsWith("uploads/")) throw new Error("路徑不允許");

        return {
          allowedContentTypes: ["image/*", "video/*", "audio/*", "application/pdf", "text/vtt"],
          maximumSizeInBytes: 200 * 1024 * 1024,
          addRandomSuffix: true,
        };
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
