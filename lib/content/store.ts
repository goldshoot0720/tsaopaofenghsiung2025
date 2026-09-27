import { cache } from "react";
import { get, put } from "@vercel/blob";

import type { ContentResult, SiteContent } from "./types";

import { defaultContent } from "./defaults";
import { normalizeContent } from "./validate";

export const CONTENT_PATHNAME = "content/site.json";

export function isBlobConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

async function readContent(): Promise<ContentResult> {
  const fallback: ContentResult = { content: defaultContent, source: "default", updatedAt: null };

  if (!isBlobConfigured()) return fallback;

  try {
    // useCache: false 直接讀取來源，避免覆寫後 CDN 仍回傳舊版
    const result = await get(CONTENT_PATHNAME, { access: "public", useCache: false });

    if (!result || result.statusCode !== 200) return fallback;

    const json = await new Response(result.stream).json();

    return {
      content: normalizeContent(json),
      source: "blob",
      updatedAt: result.blob.uploadedAt.toISOString(),
    };
  } catch (error) {
    console.error("[content] 讀取 Vercel Blob 失敗，改用預設資料", error);

    return fallback;
  }
}

// 同一個 request 內（layout + page）只讀一次
export const getContent = cache(readContent);

export async function saveContent(content: SiteContent) {
  return put(CONTENT_PATHNAME, JSON.stringify(content, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json; charset=utf-8",
    cacheControlMaxAge: 60,
  });
}
