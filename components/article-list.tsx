"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NextLink from "next/link";

import { formatDate, postsUrl, type PostSummary } from "@/lib/ghost";

const LIMIT = 10;

export function ArticleList() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);
  const busy = useRef(false);

  const load = useCallback(async (pageNum: number) => {
    if (busy.current) return;
    busy.current = true;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        postsUrl({ limit: LIMIT, page: pageNum, order: "published_at DESC", fields: "uuid,slug,title,excerpt,published_at" }),
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { posts: PostSummary[] };
      const next = data.posts ?? [];

      if (next.length < LIMIT) setHasMore(false);
      setPosts((prev) => {
        const seen = new Set(prev.map((p) => p.uuid));

        return [...prev, ...next.filter((p) => !seen.has(p.uuid))];
      });
    } catch (err) {
      console.error(err);
      setError("載入文章時發生錯誤");
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(page);
  }, [page, load]);

  useEffect(() => {
    const el = sentinel.current;

    if (!el || !hasMore || error) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !busy.current) setPage((p) => p + 1);
      },
      { rootMargin: "400px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasMore, error, posts.length]);

  return (
    <div>
      <ol className="divide-y divide-[var(--line)] border-y rule">
        {posts.map((post) => (
          <li key={post.uuid}>
            <NextLink
              className="group grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8"
              href={`/article/${post.slug}`}
            >
              <time className="label pt-1.5" dateTime={post.published_at}>
                {formatDate(post.published_at)}
              </time>
              <div>
                <h2 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
                  {post.title}
                </h2>
                {post.excerpt && <p className="mt-2 line-clamp-2 leading-relaxed text-soft">{post.excerpt}</p>}
              </div>
            </NextLink>
          </li>
        ))}
        {loading &&
          Array.from({ length: posts.length === 0 ? 4 : 1 }, (_, i) => (
            <li key={`skeleton-${i}`} aria-hidden className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <span className="h-3 w-20 animate-pulse rounded bg-[var(--paper-sunk)]" />
              <span className="h-6 w-2/3 animate-pulse rounded bg-[var(--paper-sunk)]" />
            </li>
          ))}
      </ol>

      <div ref={sentinel} className="py-8 text-center text-sm text-faint" role="status">
        {error ? (
          <span className="flex flex-col items-center gap-3">
            {error}
            <button className="btn btn-ghost" type="button" onClick={() => load(page)}>
              重試
            </button>
          </span>
        ) : loading ? (
          "載入中…"
        ) : !hasMore ? (
          posts.length ? "沒有更多文章了" : "目前沒有文章"
        ) : null}
      </div>
    </div>
  );
}
