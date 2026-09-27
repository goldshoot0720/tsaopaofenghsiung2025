import { createHash, timingSafeEqual } from "node:crypto";

function digest(value: string) {
  return new Uint8Array(createHash("sha256").update(value).digest());
}

export function isAdminToken(candidate: string | null | undefined) {
  const expected = process.env.ADMIN_TOKEN;

  if (!expected || !candidate) return false;

  return timingSafeEqual(digest(candidate), digest(expected));
}

export function isAuthorized(request: Request) {
  const header = request.headers.get("authorization") ?? "";

  return isAdminToken(header.replace(/^Bearer\s+/i, ""));
}
