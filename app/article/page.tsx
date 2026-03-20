"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import ArticleItem from "@/components/articleItem";
import { title } from "@/components/primitives";

interface Post {
  id: string;
  uuid: string; // 加上 uuid
  title: string;
  slug: string;
  published_at: string;
}

export default function ArticleListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadingRef = useRef(loading);
  const hasMoreRef = useRef(hasMore);

  loadingRef.current = loading;
  hasMoreRef.current = hasMore;

  const limit = 10;

  const loadPosts = useCallback(async (pageNum: number) => {
    if (loadingRef.current) return;
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        "https://ghost.tpe12thmayor2025to2038.com/ghost/api/content/posts/",
        {
          params: {
            key: "ed368b3f6f52fc42d71f93a280",
            limit,
            order: "published_at DESC",
            page: pageNum,
          },
        }
      );
      const newPosts: Post[] = res.data.posts;

      if (!newPosts || newPosts.length === 0) {
        setHasMore(false);
      } else {
        if (newPosts.length < limit) setHasMore(false);

        setPosts((prev) => {
          const existingUuids = new Set(prev.map((p) => p.uuid));
          const filteredNewPosts = newPosts.filter(
            (p) => !existingUuids.has(p.uuid)
          );
          return [...prev, ...filteredNewPosts];
        });
      }
    } catch (err) {
      setError("載入文章時發生錯誤");
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadPosts(1);
  }, [loadPosts]);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        !loadingRef.current &&
        hasMoreRef.current
      ) {
        setPage((prev) => prev + 1);
      }
    };

    const throttledHandleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 200);
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadPosts(page);
  }, [page, loadPosts]);

  return (
    <div className="tech-panel mx-auto mt-4 max-w-4xl rounded-[2rem] p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <p className="tech-heading text-sm text-orange-700/90">Content Stream</p>
        <h1 className={title({ color: "cyan" })}>最新文章</h1>
        <div className="tech-divider" />
      </div>
      {error && (
        <p className="mb-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-center font-medium text-red-200">
          {error}
        </p>
      )}
      <ul className="space-y-3">
        {posts.map((post) => (
          <ArticleItem key={post.uuid} post={post} />
        ))}
      </ul>
      {loading && <p className="py-4 text-center text-orange-700/70">載入中...</p>}
      {!hasMore && !loading && (
        <p className="py-4 text-center text-orange-700/70">沒有更多文章了</p>
      )}
    </div>
  );
}
