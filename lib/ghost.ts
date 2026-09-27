// Ghost Content API（公開唯讀金鑰）
export const GHOST_API = "https://ghost.tpe12thmayor2025to2038.com/ghost/api/content";
export const GHOST_KEY = "ed368b3f6f52fc42d71f93a280";

export interface PostSummary {
  uuid: string;
  slug: string;
  title: string;
  excerpt?: string;
  published_at: string;
}

export interface Post extends PostSummary {
  html: string;
  feature_image: string | null;
  reading_time?: number;
}

export function postsUrl(params: Record<string, string | number>) {
  const search = new URLSearchParams({ key: GHOST_KEY });

  for (const [k, v] of Object.entries(params)) search.set(k, String(v));

  return `${GHOST_API}/posts/?${search}`;
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Taipei",
  });
}
